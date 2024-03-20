const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const multer = require('multer');


const resumeController = require("../controller/resume.controller");

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Use a POST request to create a new resume entry
router.post("/create", resumeController.createResumeEntry);
router.post("/regenerate", resumeController.createRegeneratedResumeEntry);
router.post("/save", resumeController.saveResumeData); // route for saving ChatGPT data 
router.post("/saveInputData", resumeController.saveInputResumeData); // route for saving input
// Route for saving resume PDF - apply multer middleware only to this route
router.post("/saveResumePDF", upload.single('file'), resumeController.saveResumePDF);
router.get("/getAllSavedResumes", resumeController.getAllSavedResumes);
// Route for fetching a saved resume PDF
router.get("/getResumePdf/:id", resumeController.getSavedResumePDF);


module.exports = router;
