const sql = require('mssql');

const config = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  database: process.env.DB_DBNAME,
  options: {
    encrypt: true, // For Azure SQL
    trustServerCertificate: false // Change this if needed based on your server setup
  }
};

const pool = new sql.ConnectionPool(config);

async function connectToDatabase() {
  try {
    await pool.connect();
    console.log('Connected successfully');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

module.exports = {
  pool,
  connectToDatabase
};
