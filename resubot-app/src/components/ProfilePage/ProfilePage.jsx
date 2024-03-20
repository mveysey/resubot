import React, { useState } from 'react';
import "./ProfilePage.scss";
import HomeToolBar from "../../components/HomeToolBar/HomeToolBar.jsx";
import Profiles from "../../components/Profiles/Profiles.jsx";
import axios from 'axios';
import resume2 from "../../assets/resume_template2.PNG";

const ProfilePage = ({ isCoverLetter }) => {
  const [resumeID, setResumeID] = useState(1); // Assuming you will get this ID somehow

  const viewSavedResumePDF = async () => {
    if (resumeID) {
      try {
        const response = await axios.get(`http://localhost:4000/api/resume/getResumePdf/${resumeID}`, { responseType: 'blob' });
        const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank'); // Open in a new tab
      } catch (error) {
        console.error('Error viewing resume:', error);
      }
    } else {
      console.log('No resume ID provided');
    }
  };
  

  // const viewSavedResumePDF = async () => {
  //   if (resumeID) {
  //     try {
  //       const response = await axios.get(`http://localhost:4000/api/resume/getResumePdf/${resumeID}`, { responseType: 'blob' });
  //       const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
  //       const pdfUrl = URL.createObjectURL(pdfBlob);
  //       window.open(pdfUrl);
  //     } catch (error) {
  //       console.error('Error viewing resume:', error);
  //     }
  //   } else {
  //     console.log('No resume ID provided');
  //   }
  // };
  return (
    <div className="home-wrapper">
      <div className="horizontal_wrap">
        <ul className="profile-menu">
          <li>
            <a href="/profile_resume" className={isCoverLetter ? "resume" : "resume active"}>
              <strong>My Resume</strong>
            </a>
          </li>
          <li>
            <a href="/profile_coverletter" className={isCoverLetter ? "coverletter active" : "coverletter"}>
              <span className="text">
                <strong>My Cover Letter</strong>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="home-content">
        {/* Dashboard Stats */}
        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <div>
              <p className="total-header">Total Resumes</p>
              <p className="title">23</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="total-header">Total Cover Letters</p>
              <p className="title">13</p>
            </div>
          </div>
        </nav>

        <div className="toolbar-bar" />

        <div className="hometoolbar-wrapper">
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
              <button onClick={viewSavedResumePDF} className="button is-primary">
              View Saved Resume
            </button>
                <p className="title is-4">
                  <a href={isCoverLetter ? "/create_coverletter" : "/finalresume"} className="new-button button is-info">
                    {isCoverLetter ? "New Cover Letter" : "New Resume"}
                  </a>
                </p>
              </div>
              
              <div>
    
      </div>
            </div>
            <div className="level-right">
              <div className="level-item ml-6">
                <div className="field has-addons">
                  <p className="control">
                    <input className="input" type="text" placeholder={isCoverLetter ? "Find my cover letter..." : "Find a resume..."} />
                  </p>
                  <p className="control">
                    <button className="button">Search</button>
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="toolbar-bar" />
        <img
  src={resume2}
  alt="Saved Resume Preview"
  onClick={() => viewSavedResumePDF()}
  className="resume-preview"
/>

        

      </div>
     
 



    </div>
  );
};

export default ProfilePage;
