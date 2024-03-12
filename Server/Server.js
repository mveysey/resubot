// using Middlewares
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config({ path: '.env.development' });


const app = express();
const PORT = process.env.PORT || 4000;

//project configs
require("dotenv").config({ path: ".env.development" });

//cors config
app.use(
  cors({
    // origin: 'http://localhost:3000', // Allow requests from this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow cookies and HTTP authentication headers
    optionsSuccessStatus: 204, // Set the status code for preflight requests
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extened: false }));

const resumeRouter = require("./routes/resume.router");
const authRouter = require("./routes/auth.router");
const testRouter = require("./routes/test.router");
const miscRouter = require("./routes/misc.router");
const templateRouter = require("./routes/template.router")
app.use("/api/resume", resumeRouter);
app.use("/api/auth", authRouter);
app.use("/api/test", testRouter);
app.use("/api/template", templateRouter);
app.use("/api/misc", miscRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('api/saveResumeData', async (req, res) => {
  try {
    const { experienceData, educationData, skillsData, projectData } = req.body;

    // Adjust the query to insert data into specific columns
    const query = `INSERT INTO resume (experienceData, educationData, skillsData, projectData) 
                   VALUES ($1, $2, $3, $4)`;

    // Execute the query with all data
    await pool.query(query, [experienceData, educationData, skillsData, projectData]);

    res.status(200).send('Data saved successfully');
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).send('Error saving data');
  }
});



