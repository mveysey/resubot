const express = require("express");
const router = express.Router();

//http://localhost:4000/api/test/hello
const testController = require("../controller/test.controller");

router.get("/hello", testController.test1);


const { pool } = require('../database/Database'); 

// Test database connection
router.get('/dbtest', async (req, res) => {
  try {
    const request = pool.request(); // Create a new request from the pool
    // const result = await request.query('SELECT * '); // Execute the query
    res.status(200).json({ success: true, message: 'Database connection successful' });
  } catch (error) {
    console.error('Error connecting to database:', error);
    res.status(500).json({ success: false, message: 'Failed to connect to the database' });
  }
});

module.exports = router;


module.exports = router;
