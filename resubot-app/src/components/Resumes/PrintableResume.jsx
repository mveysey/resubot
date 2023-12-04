// export and download the generated resume from chatgpt 
// PrintableResume.jsx

import React from "react";

const PrintableResume = ({ userData, chatgptData }) => {
  return (
    <div>
      <h1>Printable Resume</h1>
      {/*resume data */}
      <p>Name: {userData.fullName}</p>
      <p>Position: {userData.currentPosition}</p>
      {/* Resume Field  */}
      {/* ChatGPT data */}
      <h2>ChatGPT Data</h2>
      <p>ChatGPT Test Response: {chatgptData.test}</p>
      {/* AAdditional Fields from ChatGPT response */}
    </div>
  );
};

export default PrintableResume;
