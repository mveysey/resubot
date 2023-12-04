// using Middlewares
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

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
app.use("/api/resume", resumeRouter);
app.use("/api/auth", authRouter);
app.use("/api/test", testRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
