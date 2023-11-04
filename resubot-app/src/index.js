import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals.js";

//theme css
import './scss/theme.scss'
//react-toastify css
import 'react-toastify/dist/ReactToastify.css';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import {ToastContainer} from "react-toastify";

//layout for the whole application
import Layout from "./Layout.jsx";

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
      <Layout/>
  </React.StrictMode>
);

reportWebVitals();
