// const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const { generateID, generateText } = require("../util/ai-util"); // Import utility functions


const chatbotController = {
    interactWithChatbot: async (req, res) => {
      try {
        const userMessages = req.body.messages; // Array of message objects
        const aiResponse = await generateText(userMessages);
  
        res.json({ message: aiResponse });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  };

  
module.exports = chatbotController;
