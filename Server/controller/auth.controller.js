const pool = require("../database/Database")
const bcrypt = require('bcrypt')
const { isAuthenticated, getUsersDb, createToken} = require("../util/auth-util");

const authController = {
    //register logic implementation
    register: async (req, res) => {
        try {
            const { email, password, name } = req.body
            const [user, ] = await pool.query("select * from users where email = ?", [email])
            if (user[0]) return res.json({ error: "Email already exists!" })


            const hash = await bcrypt.hash(password, 10)

            const sql = "insert into users (email, password, name) values (?, ?, ?)"
            const [rows, fields] = await pool.query(sql, [email, hash, name])

            if (rows.affectedRows) {
                return res.json({ message: "Ok" })
            } else {
                return res.json({ error: "Error" })
            }

        } catch (error) {
            console.log(error)
            res.json({
                error: error.message
            })
        }
    },



    //login logic implementation
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const users = await getUsersDb();
            if (await isAuthenticated({email, password})) {
                const user = users.find(
                    u => u.email === email && u.password === password
                );
                const { username, type } = user;
                // jwt
                const jwToken = createToken({ username, type, email });
                return res.status(200).json(jwToken);
            } else {
                const status = 401;
                const message = 'Incorrect email or password';
                return res.status(status).json({ status, message });
            }
        } catch (error) {
            console.log(error)
            res.json({
                error: error.message
            })
        }
    },


    getAllUsers: async (req, res) => {
        try {
            // retrieve user data from the database using getUsersDb function
            const users = await getUsersDb();
            if (users.length > 0) {
                // filter sensitive information before sending the data
                const usersWithoutPassword = users.map(user => {
                    const { password, ...userWithoutPassword } = user;
                    return userWithoutPassword;
                });

                return res.status(200).json(usersWithoutPassword);
            } else {
                return res.status(404).json({ message: 'No users found' });
            }
        } catch (error) {
            console.log(error);
            res.json({
                error: error.message
            });
        }
    },

    getUserByUsername: async (req, res) => {
        try {
            const { username } = req.params; // extract the username from the URL parameters
            const users = await getUsersDb();
            const user = users.find(u => u.username === username);
            if (user) {
                const { password, ...userWithoutPassword } = user;
                return res.status(200).json(userWithoutPassword);
            } else {
                return res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            console.log(error);
            res.json({
                error: error.message
            });
        }
    },
}

module.exports = authController