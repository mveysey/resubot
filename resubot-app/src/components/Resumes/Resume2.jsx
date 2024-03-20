import React, { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./resume2.scss";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Resume2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [regenerateRequest, setRegenerateRequest] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  // const resumeData = location.state?.resumeData || {};
  const [resumeData, setResumeData] = useState(
    location.state?.resumeData || {}
  ); // Declare a state to hold your resume data

  // Add useEffect here
  useEffect(() => {
    // This will update resumeData state whenever location.state changes
    setResumeData(location.state?.resumeData || {});
  }, [location.state]); // Dependency array, effect runs on change of location.state

  const fullName = resumeData.fullName || "";
  const phoneNumber = resumeData.phoneNumber || "";
  const email = resumeData.email || "";
  const linkedIn = resumeData.linkedIn || "";
  const personalLink = resumeData.personalLink || "";
  const companyInfo = resumeData.companyInfo || "";
  const degree = resumeData.degree || "";
  const schoolLocation = resumeData.schoolLocation || "";
  const schoolName = resumeData.schoolName || "";
  const graduation = resumeData.graduation || "";
  const grades = resumeData.grades || "";
  const projectTitle = resumeData.projectTitle || "";
  const experienceGenerated1 = resumeData.experienceGenerated1 || "";
  const experienceGenerated2 = resumeData.experienceGenerated2 || "";
  const educationGenerated = resumeData.educationGenerated || "";
  const skillsGenerated = resumeData.skillsGenerated || "";
  const projectGenerated = resumeData.projectGenerated || "";

  // Split the skills data based on numbered lists
  const skills = skillsGenerated.split(/\d+\.\s/).filter(Boolean);

  // Split the education data based on numbered lists
  const educationCourses = educationGenerated.split(/\d+\.\s/).filter(Boolean);

  const displayExperience2 = () => {
    if (companyInfo[1]) {
      return (
        <li className="content">
          <div class="jobPosition">
            <span class="bolded">{companyInfo[1].role}</span>
          </div>
          <div class="companyName bolded">
            <span>
              {companyInfo[1].company} - {companyInfo[1].location}
            </span>
            <span className="date">{companyInfo[1].date}</span>
          </div>
          <div class="smallText">
            <ul>
              <li>{experienceGenerated2}</li>
            </ul>
          </div>
        </li>
      );
    }
  };

  const regenerateData = (e) => {
    e.preventDefault();
    const formData = new FormData();

    navigate("/resume-generation");

    formData.append("regenerateRequest", regenerateRequest);

    axios
      .post("http://localhost:4000/api/resume/regenerate", {
        regenerateRequest: regenerateRequest,
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        linkedIn: linkedIn,
        personalLink: personalLink,
        companyInfo: companyInfo,
        experienceGenerated1: experienceGenerated1,
        experienceGenerated2: experienceGenerated2,
        degree: degree,
        courses: educationGenerated,
        schoolName: schoolName,
        schoolLocation: schoolLocation,
        graduation: graduation,
        grades: grades,
        skills: skillsGenerated,
        projectTitle: projectTitle,
        projectDescription: projectGenerated,
      })
      .then((res) => {
        if (res.data.message && res.data.data) {
          // state object
          const resumeData = {
            regenerateRequest,
            fullName,
            phoneNumber,
            email,
            linkedIn,
            personalLink,
            companyInfo,
            degree,
            schoolLocation,
            schoolName,
            graduation,
            projectTitle,
            grades,
            experienceGenerated1,
            experienceGenerated2,
            educationGenerated,
            skillsGenerated,
            projectGenerated,
          };
          console.log("******** experience generated", experienceGenerated1);
          navigate("/resume2", { state: { resumeData: res.data.data } });
        }
      })
      .catch((err) => console.error(err));
  };

  const generatePdf = () => {
    const resumeElement = document.getElementById("resumeElement");

    setTimeout(() => {
      html2canvas(resumeElement, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: [canvas.width, canvas.height],
        });
        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save("resume.pdf");
      });
    }, 500); // Adjust delay as needed
  };

  return (
    <>
      <form
        onSubmit={regenerateData}
        method="POST"
        encType="multipart/form-data"
        id="regenerateForm"
      >
        <label>Regeneration Request</label>
        <input
          type="text"
          name="regenerationRequest"
          id="regenerateRequestID"
          value={regenerateRequest}
          onChange={(e) => setRegenerateRequest(e.target.value)}
        />
        <button>Submit Regeneration Request</button>
      </form>
      <div class="container2">
        <div class="leftPanel">
          <div class="details">
            <div>
              <h1>{fullName}</h1>
            </div>
            <div class="item bottomLineSeparator">
              <h2 className="sectionTitle">CONTACT</h2>
              <div class="smallText">
                <p>
                  <i class="fa fa-phone contactIcon" aria-hidden="true"></i>
                  {phoneNumber}
                </p>
                <p>
                  <i class="fa fa-envelope contactIcon" aria-hidden="true"></i>
                  {email}
                </p>
                <p>
                  <i
                    class="fa fa-linkedin-square contactIcon"
                    aria-hidden="true"
                  ></i>
                  <a href={linkedIn}>{linkedIn}</a>
                </p>
                <p>
                  <i
                    class="fa fa-linkedin-square contactIcon"
                    aria-hidden="true"
                  ></i>
                  <a href={personalLink}>{personalLink}</a>
                </p>
              </div>
            </div>
            <div class="item bottomLineSeparator">
              <h2 className="sectionTitle">SKILLS</h2>
              <div class="smallText">
                {skills.map((skill) => {
                  return (
                    <div class="skill">
                      <div>
                        <span>{skill}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="education2">
              <h2 className="sectionTitle">EDUCATION</h2>
              <div class="smallText">
                <p class="bolded white">{degree}</p>
                <p className="subDetails">{schoolName}</p>
                <p className="subDetails">{graduation}</p>
                <p className="subDetails">
                  {educationCourses.map((course) => {
                    const lines = course.split("\n").filter(Boolean);
                    return (
                      <div className="subDetails">
                        <h4>{lines[0]}</h4>
                        {lines.slice(1).map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="rightPanel">
          <div class="workExperience">
            <h2 className="sectionTitle">Work experience</h2>
            <ul>
              <li className="content">
                <div class="jobPosition">
                  <span class="bolded">{companyInfo[0].role}</span>
                </div>
                <div class="companyName bolded">
                  <span>
                    {companyInfo[0].company} - {companyInfo[0].location}
                  </span>
                  <span className="date">{companyInfo[0].date}</span>
                </div>
                <div class="smallText">
                  <ul>
                    <li>{experienceGenerated1}</li>
                  </ul>
                </div>
              </li>
              {displayExperience2()}
            </ul>
            <div class="clear"></div>
          </div>
          <div className="projects">
            <h2 className="sectionTitle">Projects</h2>

            <div class="sectionContent">
              <h3>{projectTitle} </h3>
              <p>{projectGenerated}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume2;
