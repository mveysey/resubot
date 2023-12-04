// using Middlewares
const { OpenAI } = require("openai");
const express = require("express");
const cors = require("cors");

const app = express()

//project configs
require('dotenv').config({ path: '.env.development' })

//cors config
app.use(cors({
  // origin: 'http://localhost:3000', // Allow requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // allow cookies and HTTP authentication headers
  optionsSuccessStatus: 204, // Set the status code for preflight requests
}));


app.use(express.urlencoded({extended: false}))
app.use(express.json())

const resumeRouter = require('./routes/resume.router')
const authRouter = require('./routes/auth.router')
const testRouter = require('./routes/test.router')

app.use("/api/resume", resumeRouter)
app.use("/api/auth", authRouter)
app.use("/api/test", testRouter)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
