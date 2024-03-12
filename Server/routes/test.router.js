const express = require("express");
const router = express.Router();
const { poolPromise, sql } = require('../database/Database'); // Import sql here

//http://localhost:4000/api/test/hello
const testController = require("../controller/test.controller");
// test.router.js
// const { poolPromise } = require('../database/Database'); // Adjust the path as needed

router.get("/hello", testController.test1);


const { pool } = require('../database/Database'); 

const defaultResume = {
    experienceData: 'newExperience added',
    educationGenerated: 'new Education added',
    skillsGenerated: 'new skills added',
    projectGenerated: 'new project generated'
};

router.get('/insertDefaultResume', async (req, res) => {
    try {
        const pool = await poolPromise;
        const query = `INSERT INTO resumeData (experienceData, educationGenerated, skillsGenerated, projectGenerated) 
                       VALUES (@experienceData, @educationGenerated, @skillsGenerated, @projectGenerated)`;

        const result = await pool.request()
            .input('experienceData', sql.NVarChar, defaultResume.experienceData)
            .input('educationGenerated', sql.NVarChar, defaultResume.educationGenerated)
            .input('skillsGenerated', sql.NVarChar, defaultResume.skillsGenerated)
            .input('projectGenerated', sql.NVarChar, defaultResume.projectGenerated)
            .query(query);

        res.status(200).json({ success: true, message: 'Default resume data inserted successfully' });
    } catch (error) {
        console.error('Error inserting default resume data:', error);
        res.status(500).json({ success: false, message: 'Failed to insert default resume data' });
    }
});


// Test database connection
// test.router.js

// test.router.js


router.get('/dbtest', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM resumeData;');
    res.status(200).json({ success: true, message: 'Database connection successful', data: result.recordset });
  } catch (error) {
    console.error('Error connecting to database:', error);
    res.status(500).json({ success: false, message: 'Failed to connect to the database' });
  }
});

module.exports = router;


module.exports = router;


module.exports = router;


module.exports = router;
