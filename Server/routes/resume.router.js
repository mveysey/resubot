const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();

const resumeController = require("../controller/resume.controller");

// Use a POST request to create a new resume entry
router.post("/create", resumeController.createResumeEntry);
router.post("/regenerate", resumeController.createRegeneratedResumeEntry);
router.post("/save", resumeController.saveResumeData); // route for saving ChatGPT data 
router.post("/saveInputData", resumeController.saveInputResumeData); // route for saving input


module.exports = router;
