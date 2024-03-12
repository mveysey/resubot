// Database.js
const sql = require('mssql');

const config = {
  user: 'admin',
  password: 'Resubot2024',
  server: 'resubotdb.c5usg0wm00ma.us-east-2.rds.amazonaws.com',
  database: 'resubot',
  port: 1433,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
};
