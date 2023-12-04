// util.js

const { OpenAI } = require("openai");

const openai = new OpenAI({});

// Function to generate a random ID
const generateID = () => {
    return Math.floor(Math.random() * 1000) + 1;
};

// Function to generate text using OpenAI API
const generateText = async (text) => {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: text }],
        temperature: 0.6,
        max_tokens: 250,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    });
    return response.choices[0].message;
};

module.exports = { generateID, generateText };
