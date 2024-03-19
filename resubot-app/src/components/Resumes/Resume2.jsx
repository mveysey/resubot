import React, { useState } from "react";
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
  const resumeData = location.state?.resumeData || {};

  // Convert the entire experienceData object to a JSON string
  const experienceDataString = JSON.stringify(resumeData, null, 2);
  const fullName = resumeData.fullName || "";
  const phoneNumber = resumeData.phoneNumber || "";
  const email = resumeData.email || "";
  const linkedIn = resumeData.linkedIn || "";
  const personalLink = resumeData.personalLink || "";
  const companyInfo = resumeData.companyInfo || "";
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
  const generatedCompanyInfo = resumeData.generatedCompanyInfo || "";
  const experienceData = resumeData.experienceData || "";
  const educationGenerated = resumeData.educationGenerated || "";
  const skillsGenerated = resumeData.skillsGenerated || "";
  const projectGenerated = resumeData.projectGenerated || "";

  console.log(generatedCompanyInfo);

  // Split the skills data based on numbered lists
  const skills = skillsGenerated.split(/\d+\.\s/).filter(Boolean);

  // Split the education data based on numbered lists
  const educationCourses = educationGenerated.split(/\d+\.\s/).filter(Boolean);

  const regenerateData = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("regenerateRequest", regenerateRequest);

    axios
      .post("http://localhost:4000/api/resume/regenerate", {
        regenerateRequest: regenerateRequest,
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        linkedIn: linkedIn,
        personalLink: personalLink,
        role: role,
        company: company,
        location: location,
        description: experienceData,
        date: date,
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
        if (res.data.message) {
          // const experienceData = res.data.data.experienceGenerated;
          // const educationGenerated = res.data.data.educationGenerated;
          // const skillsGenerated = res.data.data.skillsGenerated;
          // const projectGenerated = res.data.data.projectGenerated;

          // state object
          const resumeData = {
            regenerateRequest,
            fullName,
            phoneNumber,
            email,
            linkedIn,
            personalLink,
            role,
            company,
            date,
            location,
            degree,
            schoolLocation,
            schoolName,
            graduation,
            projectTitle,
            grades,
            experienceData,
            educationGenerated,
            skillsGenerated,
            projectGenerated,
          };
          console.log("************* Experience Data", experienceData);
          navigate("/resume2", { state: { resumeData } });
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
                {/* <div class="skill">
                  <div>
                    <span>Accounting</span>
                  </div>
                </div>

                <div class="skill">
                  <div>
                    <span>Word</span>
                  </div>
                </div>

                <div class="skill">
                  <div>
                    <span>Powerpoint</span>
                  </div>
                </div>

                <div class="skill">
                  <div>
                    <span>Accounting</span>
                  </div>
                </div>

                <div class="skill">
                  <div>
                    <span>Marketing</span>
                  </div>
                </div>

                <div class="skill">
                  <div>
                    <span>Photoshop</span>
                  </div>
                </div>

                <div class="skill">
                  <div>
                    <span>French</span>
                  </div>
                </div>

                <div class="skill">
                  <div>
                    <span>English</span>
                  </div>
                </div>

                <div class="skill">
                  <div>
                    <span>Management</span>
                  </div>
                </div> */}
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
              {companyInfo.map((experience) => {
                return (
                  <li className="content">
                    <div class="jobPosition">
                      <span class="bolded">{experience.role}</span>
                    </div>
                    <div class="companyName bolded">
                      <span>
                        {experience.company} - {experience.location}
                      </span>
                      <span className="date">{experience.date}</span>
                    </div>
                    <div class="smallText">
                      <ul>
                        <li>{experience.description}</li>
                      </ul>
                    </div>
                  </li>
                );
              })}

              {/* <li className="content">
                <div class="jobPosition">
                  <span class="bolded">Digital Marketing Expert</span>
                </div>
                <div class="companyName bolded">
                  <span>Company name</span>
                  <span className="date">Jun 2014 - Sept 2015</span>
                </div>
                <div class="smallText">
                  <ul>
                    <li>
                      Integer commodo ullamcorper mauris, id condimentum lorem
                      elementum sed. Etiam rutrum eu elit ut hendrerit.
                      Vestibulum congue sem ac auctor semper. Aenean quis
                      imperdiet magna. Sed eget ullamcorper enim. Vestibulum
                      consequat turpis eu neque efficitur blandit sed sit amet
                      neque. Curabitur congue semper erat nec blandit.
                    </li>
                    <li>
                      Integer commodo ullamcorper mauris, id condimentum lorem
                      elementum sed. Etiam rutrum eu elit ut hendrerit.
                      Vestibulum congue sem ac auctor semper. Aenean quis
                      imperdiet magna. Sed eget ullamcorper enim. Vestibulum
                      consequat turpis eu neque efficitur blandit sed sit amet
                      neque. Curabitur congue semper erat nec blandit.
                    </li>
                  </ul>
                </div>
              </li> */}

              {/* <li className="content">
                <div class="jobPosition">
                  <span class="bolded">Accountant</span>
                </div>
                <div class="companyName bolded">
                  <span>Company name</span>
                  <span className="date">Jun 2017 - May 2020</span>
                </div>
                <div class="smallText">
                  <ul>
                    <li>
                      Integer commodo ullamcorper mauris, id condimentum lorem
                      elementum sed. Etiam rutrum eu elit ut hendrerit.
                      Vestibulum congue sem ac auctor semper. Aenean quis
                      imperdiet magna. Sed eget ullamcorper enim. Vestibulum
                      consequat turpis eu neque efficitur blandit sed sit amet
                      neque. Curabitur congue semper erat nec blandit.
                    </li>
                    <li>
                      Integer commodo ullamcorper mauris, id condimentum lorem
                      elementum sed. Etiam rutrum eu elit ut hendrerit.
                      Vestibulum congue sem ac auctor semper. Aenean quis
                      imperdiet magna. Sed eget ullamcorper enim. Vestibulum
                      consequat turpis eu neque efficitur blandit sed sit amet
                      neque. Curabitur congue semper erat nec blandit.
                    </li>
                  </ul>
                </div>
              </li> */}
            </ul>
            <div class="clear"></div>
          </div>
          <div className="projects">
            <h2 className="sectionTitle">Projects</h2>

            <div class="sectionContent">
              <h3>{projectTitle} </h3>
              <p>{projectGenerated}</p>
            </div>

            {/* <div class="sectionContent">
              <h3>Knowles, Heather, Mogan, Jennifer, et al.</h3>
              <p>
                "STING/MPYS mediates host defense against listeria monocytogenes
                infection by regulating Ly6Chi monocyte migration." The Journal
                of Immunology 190.6 (2013): 2835-2843.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume2;
