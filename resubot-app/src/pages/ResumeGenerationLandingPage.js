import React from 'react';
import './ResumeGenerationLandingPage.css'; // css file for style 

const ResumeGenerationLandingPage = () => {
  return (
    <div className="resume-generation-container">
      <div className="resume-generation-message">
        <h1>Your resume is being generated...</h1>
        <p>Please wait a moment.</p>
        {/* You can add more elements here if needed */}
      </div>
    </div>
  );
};

export default ResumeGenerationLandingPage;
