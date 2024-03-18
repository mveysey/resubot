const express = require("express");
const router = express.Router();
const chatbotController = require("../controller/chatbot.controller"); // Correct path to your chatbotController

// Use a POST request to create new chatbot entry 
router.post('/create', chatbotController.interactWithChatbot);

module.exports = router;

