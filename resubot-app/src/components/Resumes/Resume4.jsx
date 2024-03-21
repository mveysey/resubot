import React, { useState, useEffect } from "react";
import "./Resume4.scss";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Resume4 = () => {
  const [regenerateRequest, setRegenerateRequest] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const [resumeData, setResumeData] = useState(
    location.state?.resumeData || {}
  );

  const [isSaving, setIsSaving] = useState(false); // New state for loading prompt


  useEffect(() => {
    // This will update resumeData state whenever location.state changes
    setResumeData(location.state?.resumeData || {});
  }, [location.state]);

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
        <article>
          <h2 className="position">{companyInfo[1].role}</h2>
          <h3>
            {companyInfo[1].company} - {companyInfo[1].location}
          </h3>
          <p class="subDetails">{companyInfo[1].date}</p>
          <ul className="content-list">
            <li>{experienceGenerated2}</li>
          </ul>
        </article>
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
          navigate("/resume4", { state: { resumeData: res.data.data } });
        }
      })
      .catch((err) => console.error(err));
  };

  const generatePdf = () => {
    const resumeElement = document.getElementById("resumeElement");
    const { width, height } = resumeElement.getBoundingClientRect(); // Get bounding rectangle dimensions
  
    setTimeout(() => {
      html2canvas(resumeElement, { 
        width: width * 2, // Set canvas width to double of bounding rectangle width
        height: height * 2, // Set canvas height to double of bounding rectangle height
        scale: 2 // Maintain scale
      }).then((canvas) => {
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
  

  const generateAndSendPdf = () => {
    setIsSaving(true); // Set loading prompt to visible
    const resumeElement = document.getElementById("resumeElement");
    const { width, height } = resumeElement.getBoundingClientRect(); // Get bounding rectangle dimensions
  
    setTimeout(() => {
      html2canvas(resumeElement, { 
        width: width * 2, // Set canvas width to double of bounding rectangle width
        height: height * 2, // Set canvas height to double of bounding rectangle height
        scale: 2 // Maintain scale
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: [canvas.width, canvas.height],
        });
        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  
        // Generate blob from PDF
        const blob = pdf.output('blob');
  
        // Use FormData to send blob to server
        const formData = new FormData();
        formData.append("file", blob, "resume.pdf");
  
        axios.post("http://localhost:4000/api/resume/saveResumePdf", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then(response => {
          console.log("PDF uploaded", response);
          setIsSaving(false); // Hide loading prompt after save
        }).catch(error => {
          console.error("Error uploading PDF", error);
          setIsSaving(false); // Hide loading prompt after save
        });
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

      <div className="container" id="resumeElement">
      <div id="drag" class="cv2 wrap">
        <div class="mainDetails">
          <div id="name">
            <h1>{fullName}</h1>
            <h4 class="contact">{email}</h4>
            <h4 class="contact">{phoneNumber}</h4>
            <h4 class="contact">{linkedIn}</h4>
            <h4 class="contact">{personalLink}</h4>
          </div>
          <div class="clear"></div>
        </div>

        <div className="mainArea2">
          <section className="break">
            <div class="sectionTitle">
              <h1>Work Experience</h1>
            </div>

            <div class="sectionContent">
              <article>
                <h2 className="position">{companyInfo[0].role}</h2>
                <h3>
                  {companyInfo[0].company} - {companyInfo[0].location}
                </h3>
                <p class="subDetails">{companyInfo[0].date}</p>
                <ul className="content-list">
                  <li>{experienceGenerated1}</li>
                </ul>
              </article>
              {displayExperience2()}
            </div>

            <div class="clear"></div>
          </section>

          <section id="Education" className="break">
            <div class="sectionTitle">
              <h1>Education</h1>
            </div>

            <div class="sectionContent">
              <article>
                <h2>
                  {degree} - {graduation}
                </h2>
                <p class="subDetails">
                  {schoolName} - {schoolLocation}
                </p>
                <p>
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
              </article>
            </div>
            <div class="clear"></div>
          </section>

          <section className="break">
            <div class="sectionTitle">
              <h1>Key Skills</h1>
            </div>

            <div class="sectionContent">
              <ul class="keySkills2">
                {skills.map((skill) => {
                  return <li>{skill}</li>;
                })}
              </ul>
            </div>
            <div class="clear"></div>
          </section>

          <section className="break">
            <article>
              <div class="sectionTitle">
                <h1>Projects</h1>
              </div>

              <div class="sectionContent">
                <h2>{projectTitle}</h2>
                <p>{projectGenerated} </p>
              </div>
            </article>
            <div class="clear"></div>
          </section>
        </div>
        </div>
      </div>
      <button onClick={generatePdf}>Download as PDF</button>
      <button onClick={generateAndSendPdf}>Save</button>
    </>
  );
};

export default Resume4;
