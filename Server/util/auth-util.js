// util.js
const jwt = require('jsonwebtoken');
const pool = require("../database/Database")
const {poolPromise, sql} = require("../database/Database");

const SECRET = '12321JKLSJKLSDFJK23423432';
const expiresIn = '1h';

//retrieve user information form db
// Retrieve user information from db
const getUsersDb = async () => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM users'); // SQL query to retrieve all users
        return result.recordset; // In mssql, result.recordsets contains the rows
    } catch (error) {
        throw error;
    }
};


//validate user sign in
const isAuthenticated = async ({ email, password }) => {
    const users = await getUsersDb();
    return users.findIndex(user => user.email === email && user.password === password) !== -1;
};

// Check if user already exists
const userDoesExist = async email => {
    const users = await getUsersDb();
    return users.findIndex(user => user.email === email) !== -1;
};

const createToken = payload => {
    return jwt.sign(payload, SECRET, { expiresIn });
};

// Create a new user in the database
const createUser = async ({ email, password, username, type }) => {
    try {
        // Assuming poolPromise is a promise that resolves to a connection pool
        const pool = await poolPromise;
        // Execute the query with parameterized inputs
        const result = await pool.request()
            .input('email', sql.NVarChar, email)
            .input('password', sql.NVarChar, password)
            .input('username', sql.NVarChar, username)
            .input('type', sql.Int, type)
            .query('INSERT INTO users (email, password, username, type) VALUES (@email, @password, @username, @type); SELECT SCOPE_IDENTITY() as id;');
        return result.recordset[0].id;
    } catch (error) {
        throw error;
    }
};



// Update user password in the database
const updateUserPassword = async (email, newPassword) => {
    try {
        const pool = await poolPromise;
        await pool.request()
            .input('newPassword', sql.NVarChar, newPassword)
            .input('email', sql.NVarChar, email)
            .query('UPDATE users SET password = @newPassword WHERE email = @email');
        return true; // Return true to indicate successful password update
    } catch (error) {
        throw error;
    }
};

module.exports = {getUsersDb, createUser, isAuthenticated, userDoesExist, createToken, updateUserPassword };
