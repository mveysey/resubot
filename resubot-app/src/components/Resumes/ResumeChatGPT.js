// Resume.js

import React from "react";

// fetch data from api call in resume controller 
const ResumeChatGPT = ({ fullName, currentPosition, currentLength, currentTechnologies, workArray, remainderText, chatgptData }) => {
  return (
    <div>
      <h1>Resume</h1>
      <h2>Objective</h2>
      <p>{chatgptData.objective}</p>

      <h2>Key Points</h2>
      <ul>
        {chatgptData.keypoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <h2>Job Responsibilities</h2>
      {chatgptData.jobResponsibilities.map((responsibility, index) => (
        <div key={index}>
          <h3>{`Company ${index + 1}`}</h3>
          <p>{responsibility}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeChatGPT;
