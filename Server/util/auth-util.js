// util.js
const jwt = require('jsonwebtoken');
const pool = require("../database/Database")

const SECRET = '12321JKLSJKLSDFJK23423432';
const expiresIn = '1h';

//retrieve user information form db
const getUsersDb = async () => {
    const sql = 'SELECT * FROM users'; // SQL query to retrieve all users
    try {
        const [rows, fields] = await pool.query(sql);
        return rows;
    } catch (error) {
        throw error;
    }
};


//validate user sign in
const isAuthenticated = async ({email, password}) => {
    const users = await getUsersDb();
    return (
        users.findIndex(
            user => user.email === email && user.password === password
        ) !== -1
    );
};

//check if user already exists
const userDoesExist = async email => {
    const users = await getUsersDb();
    return users.findIndex(user => user.email === email) !== -1;
};

const createToken = payload => {
    return jwt.sign(payload, SECRET, { expiresIn });
};

// Create a new user in the database
const createUser = async ({ email, password, username, type }) => {
    const sql = 'INSERT INTO users (email, password, username, type) VALUES (?, ?, ?, ?)';
    try {
        const [rows, fields] = await pool.query(sql, [email, password, username, type]);
        return rows.insertId; // Return the ID of the newly created user
    } catch (error) {
        throw error;
    }
};

// Update user password in the database
const updateUserPassword = async (email, newPassword) => {
    const sql = 'UPDATE users SET password = ? WHERE email = ?';
    try {
        await pool.query(sql, [newPassword, email]);
        return true; // Return true to indicate successful password update
    } catch (error) {
        throw error;
    }
};

module.exports = {getUsersDb, createUser, isAuthenticated, userDoesExist, createToken, updateUserPassword };
