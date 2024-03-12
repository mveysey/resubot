const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();

const resumeController = require("../controller/resume.controller");

// Use a POST request to create a new resume entry
router.post("/create", resumeController.createResumeEntry);
router.post("/regenerate", resumeController.createRegeneratedResumeEntry);

module.exports = router;
