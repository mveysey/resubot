import React from "react";
import "./ProfilePage.scss";
import HomeToolBar from "../../components/HomeToolBar/HomeToolBar.jsx";
import Profiles from "../../components/Profiles/Profiles.jsx";

const ProfilePage = ({ isCoverLetter }) => {
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
              <p className="total-header">Total Profiles</p>
              <p className="title">12</p>
            </div>
          </div>
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
                <p className="title is-4">
                  <a href={isCoverLetter ? "/create_coverletter" : "/create_resume"} className="new-button button is-info">
                    {isCoverLetter ? "New Cover Letter" : "New Resume"}
                  </a>
                </p>
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
      </div>
    </div>
  );
};

export default ProfilePage;
