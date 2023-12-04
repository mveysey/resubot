// using Middlewares
const { OpenAI } = require("openai");
const express = require("express");
const cors = require("cors");

const app = express()

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const resumeRouter = require('./routes/resume.router')
const authRouter = require('./routes/auth.router')

app.use("/api/resume", resumeRouter)
app.use("/api/auth", authRouter)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
