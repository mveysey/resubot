import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";

/***** create reference to OpenAI API *****/
//const openai = new OpenAI();

/****  will take given text and return AI-generated version of text *****/
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
