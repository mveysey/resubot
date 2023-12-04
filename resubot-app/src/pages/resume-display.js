// ResumeDisplay.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ResumeDisplay = () => {
  const location = useLocation();
  const [modifiedResume, setModifiedResume] = useState({});

  useEffect(() => {
    // Retrieve modified resume data from location state
    if (location.state && location.state.modifiedResume) {
      setModifiedResume(location.state.modifiedResume);
    }
  }, [location.state]);

  return (
    <div>
      <h2>Modified Resume</h2>
      {/* Display modified resume data here */}
      <pre>{JSON.stringify(modifiedResume, null, 2)}</pre>
    </div>
  );
};

export default ResumeDisplay;
