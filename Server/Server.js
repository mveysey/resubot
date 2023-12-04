// using Middlewares
const express = require("express");
const cors = require("cors");
const dbRoutes = require("./Database");
const mysql = require("mysql");
// const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = process.env.PORT || 4000;

// const openai = new OpenAIApi(configuration);
// Create a MySQL database connection
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Resubot2024@",
  database: "resume",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error: " + err.stack);
    return;
  }
  console.log("Connected to the database");
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Pass the database connection to the routes
app.use("/", dbRoutes(db));

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

// const generateText = async (text) => {
//   const response = await openai.createCompletion({
//     model: "gpt-3.5-turbo",
//     prompt: text,
//     temperature: 0.6,
//     max_tokens: 250,
//     top_p: 1,
//     frequency_penalty: 1,
//     presence_penalty: 1,
//   });
//   return response.data.choices[0].text;
// };
// // get submitted info
// app.post("/resume/create", async (req, res) => {
//   const {
//     newPosition,
//     industry,
//     fullName,
//     phoneNumber,
//     email,
//     linkedIn,
//     personalLink,
//     role1,
//     company1,
//     date1,
//     location1,
//     description1,
//     role2,
//     company2,
//     date2,
//     location2,
//     description2,
//     degree,
//     location,
//     schoolName,
//     graduation,
//     skills,
//     projectTitle,
//     projectDescription,
//   } = req.body;
//   const newEntry = {
//     id: generateID(),
//     newPosition,
//     industry,
//     fullName,
//     phoneNumber,
//     email,
//     linkedIn,
//     personalLink,
//     role1,
//     company1,
//     date1,
//     location1,
//     description1,
//     role2,
//     company2,
//     date2,
//     location2,
//     description2,
//     degree,
//     location,
//     schoolName,
//     graduation,
//     skills,
//     projectTitle,
//     projectDescription,
//   };
//   const prompt1 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n I write in the technolegies: ${currentTechnologies}. Can you write a 100 words description for the top of the resume(first person writing)?`;
//   const prompt2 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n I write in the technolegies: ${currentTechnologies}. Can you write 10 points for a resume on what I am good at?`;
//   const prompt3 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n During my years I worked at ${
//     workArray.length
//   } companies. ${remainderText()} \n Can you write me 50 words for each company seperated in numbers of my succession in the company (in first person)?`;
//   const objective = await generateText(prompt1);
//   const keypoints = await generateText(prompt2);
//   const jobResponsibilities = await generateText(prompt3);
//   const chatgptData = { objective, keypoints, jobResponsibilities };
//   const data = { ...newEntry, ...chatgptData };
//   database.push(data);
//   res.json({
//     message: "Request successful!",
//     data,
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
