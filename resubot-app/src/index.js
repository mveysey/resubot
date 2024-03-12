import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals.js";


//theme css
import "./scss/theme.scss";
//react-toastify css
import "react-toastify/dist/ReactToastify.css";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { ToastContainer } from "react-toastify";
import "react-sliding-pane/dist/react-sliding-pane.css";

//layout for the whole application
import Layout from "./Layout.jsx";

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
