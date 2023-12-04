const bcrypt = require('bcrypt');
const {
    getUsersDb,
    createUser,
    createToken,
    userDoesExist,
    isAuthenticated,
    updateUserPassword
} = require('../util/auth-util');

const authController = {
    // Register a new user
    register: async (req, res) => {
        try {
            const { email, password, username, type } = req.body;

            if (await userDoesExist(email)) {
                return res.status(401).json({ error: 'Email already exists' });
            }

            const userId = await createUser({ email, password, username, type });

            if (userId) {
                const payload = { username, type, email };
                const jwToken = createToken(payload);

                return res.status(200).json({ message: 'Registration successful', token: jwToken });
            } else {
                return res.status(500).json({ error: 'Failed to create user' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error occurred while creating user' });
        }
    },

    // Log in a user
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const users = await getUsersDb();

            if (await isAuthenticated({ email, password })) {
                const user = users.find(u => u.email === email && u.password === password);
                const { username, type } = user;

                const jwToken = createToken({ username, type, email });
                return res.status(200).json(jwToken);
            } else {
                return res.status(401).json({ error: 'Incorrect email or password' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error occurred while logging in' });
        }
    },

    // Get all users
    getAllUsers: async (req, res) => {
        try {
            const users = await getUsersDb();

            const usersWithoutPassword = users.map(user => {
                const { password, ...userWithoutPassword } = user;
                return userWithoutPassword;
            });

            return res.status(200).json(usersWithoutPassword);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error occurred while fetching users' });
        }
    },

    // Get a user by username
    getUserByUsername: async (req, res) => {
        try {
            const { username } = req.params;
            const users = await getUsersDb();
            const user = users.find(u => u.username === username);

            if (user) {
                const { password, ...userWithoutPassword } = user;
                return res.status(200).json(userWithoutPassword);
            } else {
                return res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error occurred while fetching user' });
        }
    },

    // Update user password
    updatePassword: async (req, res) => {
        try {
            const { email, currentPassword, newPassword } = req.body;

            if (!(await isAuthenticated({ email, password: currentPassword }))) {
                return res.status(401).json({ error: 'Incorrect current password' });
            }

            await updateUserPassword(email, newPassword);
            return res.status(200).json({ message: 'Password updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error occurred while updating password' });
        }
    }
};

module.exports = authController;
