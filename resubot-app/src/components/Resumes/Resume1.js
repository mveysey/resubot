import React from "react";
import { useLocation } from "react-router-dom";
import "./resume1.css";

const Resume = () => {
  const location = useLocation();
  const resumeData = location.state?.resumeData || {};

  // Convert the entire experienceData object to a JSON string
  const experienceDataString = JSON.stringify(resumeData, null, 2);
  const fullName = resumeData.fullName || "";
  const phoneNumber = resumeData.phoneNumber || "";
  const email = resumeData.email || "";
  const linkedIn = resumeData.linkedIn || "";
  const personalLink = resumeData.personalLink || "";
  const role = resumeData.role || "";
  const company = resumeData.company || "";
  const date = resumeData.date || "";
  const jobLocation = resumeData.jobLocation || "";
  const degree = resumeData.degree || "";
  const schoolLocation = resumeData.schoolLocation || "";
  const schoolName = resumeData.schoolName || "";
  const graduation = resumeData.graduation || "";
  const grades = resumeData.grades || "";
  const projectTitle = resumeData.projectTitle || "";
  const experienceData = resumeData.experienceData || "";
  const educationGenerated = resumeData.educationGenerated || "";
  const skillsGenerated = resumeData.skillsGenerated || "";
  const projectGenerated = resumeData.projectGenerated || "";

  // Split the skills data based on numbered lists
  const skills = skillsGenerated.split(/\d+\.\s/).filter(Boolean);

  // Split the education data based on numbered lists
  const educationCourses = educationGenerated.split(/\d+\.\s/).filter(Boolean);

  return (
    <div className="container">
      <div className="header">
        <h1>{fullName}</h1>
        <div className="contact-info">
          <p>Email: {email}</p>
          <p>Phone: {phoneNumber}</p>
          <p>
            LinkedIn:
            <a href={linkedIn}>{linkedIn}</a>
          </p>
          <p>
            Link:
            <a href={personalLink}>{personalLink}</a>
          </p>
        </div>
      </div>

      {/* <div className="education">
                <h2>Education</h2>
                <hr/>
                {courseDetails.map((course, index) => (
                    <div key={index} className='education-item'>
                        <h4>{course.title}</h4>
                        <p>{course.institution}</p>
                        <p>{course.graduationDate}</p>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div> */}
      <div className="education">
        <h2>Education</h2>
        <hr />
        <p>
          {schoolName}, {schoolLocation}
        </p>
        <p>{degree}</p>
        <p>{graduation}</p>
        <p>{grades}</p>
        {educationCourses.map((course, index) => {
          const lines = course.split("\n").filter(Boolean);
          return (
            <div key={index} className="education-item">
              <h4>{lines[0]}</h4>
              {lines.slice(1).map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          );
        })}
      </div>

      <div className="experience">
        <h2>Experience</h2>
        <hr />
        <div className="experience-item">
          <p>{role}</p>
          <p>{company}</p>
          <p>{date}</p>
          <p>{jobLocation}</p>
          <p>{experienceData}</p>
          {/* {experienceDataString} */}
          {/* <h4>Company Name</h4>
                   
                    <p>Position</p>
                    <p>Date - Date</p>
                    <ul>
                        <li>Responsibility 1</li>
                        <li>Responsibility 2</li>
                        <li>Responsibility 3</li>
                    </ul>                 */}
        </div>
      </div>

      <div className="project">
        <h2>Projects</h2>
        <hr />
        <div className="project-item">
          {/* <h4>Project Name</h4> */}
          <p>{projectTitle}</p>
          <p>{projectGenerated}</p>
          {/* <p>Software Used</p>
                    <p>Small Description of what the project does</p>             */}
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <hr />
        {skills.map((skill, index) => {
          const [title, description] = skill.split(":");
          return (
            <div key={index} className="skill-item">
              <p>
                <strong>{title}:</strong> {description}
              </p>
            </div>
          );
        })}
        <ul className="skills-items">{/* ... your skills list ... */}</ul>
      </div>

      {/* <div className="skills">
                <h2>Skills</h2>
                <p>{skillsGenerated}</p>
                <hr/>
                    <ul className='skills-items'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Web Development</li>
                    </ul>
            </div> */}

      {/* <pre>
                        {experienceDataString}
                    </pre> */}
    </div>
  );
};

export default Resume;
