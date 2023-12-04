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
    console.log(users);
    return (
        users.findIndex(
            user => user.email === email && user.password === password
        ) !== -1
    );
};
//check if user already exists
const isExist = email => {
    return getUsersDb().findIndex(user => user.email === email) !== -1;
};

const createToken = payload => {
    return jwt.sign(payload, SECRET, { expiresIn });
};

module.exports = {getUsersDb, isAuthenticated, isExist, createToken };
