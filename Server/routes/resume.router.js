const express = require("express");
const router = express.Router();

const resumeController = require("../controller/resume.controller");

// Use a POST request to create a new resume entry
router.post("/resume/create", resumeController.createResumeEntry);

module.exports = router;
