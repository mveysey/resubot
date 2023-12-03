import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals.js";
import OpenAI from "openai";

//theme css
import "./scss/theme.scss";
//react-toastify css
import "react-toastify/dist/ReactToastify.css";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { ToastContainer } from "react-toastify";

//layout for the whole application
import Layout from "./Layout.jsx";

// //TODO: need to make a better way to generate ID
// const generateID = () => {
//   return Math.random(1000);
// };

// /***** create reference to OpenAI API *****/
// const openai = new OpenAI();

// /****  will take given text and return AI-generated version of text *****/
// export const generateText = async (text) => {
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

// app.post("/resume/create", async (req, res) => {
//   const {
//     fullName,
//     currentPosition,
//     currentLength,
//     currentTechnologies,
//     workHistory, //JSON format
//   } = req.body;

//   const workArray = JSON.parse(workHistory); //an array

//   //👇🏻 group the values into an object
//   const newEntry = {
//     id: generateID(),
//     fullName,
//     currentPosition,
//     currentLength,
//     currentTechnologies,
//     workHistory: workArray,
//   };
// });

// const remainderText = () => {
//   let stringText = "";
//   for (let i = 0; i < workArray.length; i++) {
//     stringText += ` ${workArray[i].name} as a ${workArray[i].position}.`;
//   }
//   return stringText;
// };
// //👇🏻 The job description prompt
// const prompt1 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n I write in the technolegies: ${currentTechnologies}. Can you write a 100 words description for the top of the resume(first person writing)?`;
// //👇🏻 The job responsibilities prompt
// const prompt2 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n I write in the technolegies: ${currentTechnologies}. Can you write 10 points for a resume on what I am good at?`;
// //👇🏻 The job achievements prompt
// const prompt3 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n During my years I worked at ${
//   workArray.length
// } companies. ${remainderText()} \n Can you write me 50 words for each company seperated in numbers of my succession in the company (in first person)?`;

// //👇🏻 generate a GPT-3 result
// const objective = await GPTFunction(prompt1);
// const keypoints = await GPTFunction(prompt2);
// const jobResponsibilities = await GPTFunction(prompt3);
// //👇🏻 put them into an object
// const chatgptData = { objective, keypoints, jobResponsibilities };
// //👇🏻log the result
// console.log(chatgptData);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable={true}
      pauseOnHover={true}
      limit={3}
    />
    <Layout />
  </React.StrictMode>
);

reportWebVitals();
