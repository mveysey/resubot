import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Coverletter.scss";

const CreatCoverLetter = () => {
  //To Cutomize Cover Letter for new position
  const [jobDetails, setjobDetails] = useState("");
  const [industry, setIndustry] = useState("");

  //Basic Info about user
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [personalLink, setPersonalLink] = useState("");

  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");


  //Education information
  const [degree, setDegree] = useState("");
  const [schoolName, setSchoolName] = useState("");

  //Skills Information
  const [skills, setSkills] = useState("");

  //Projects Information
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const [activeSection, setActiveSection] = useState("customize"); // State to manage active section


  const [loading, setLoading] = useState(false);
  
  //const pdfExportComponent = React.useRef(null);
  const navigate = useNavigate();

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault(); // Prevents the default anchor link behavior
    setActiveSection(sectionId);
  };  



  // Define a function to fill out the form with predefined data
  const fillFormWithData = () => {
    const predefinedData = {
      jobDetails: `Role: Python Developer (Banking Projects)
      Structure: 6 Months + Extension
      Pay: $85.00 per hour inc.
      Location: Toronto (hybrid)
      
      We currently have an opportunity for a contract role - Hybrid- Python Developer working on Banking projects.
      
      Candidate Requirements/Must-Have Skills:
      
      Strong Python Development: 10+ years of design and development experience using Python (Version 2.7 and above) and hands-on experience and in dept knowledge of standard python libraries.
      Experience processing large volumes of data using PySpark, Pandas, and/or NumPy.
      2+ years experience with Python frameworks such as Django, Flask, requests. etc.
      Experience in Object-oriented programming and Agile Development Methodology.
      Experience with TDD writing unit tests, test coverage using PyTest, PyUnit, pytest-cov libraries.
      Open-Source contribution experience
      Financial industry experience
      --
      
      Please apply with an updated resume and ensure the required skills you can speak to for this position are included.
      
      For more roles like this please go to www.corgta.com/find-a-job/
      
      Job Types: Full-time, Fixed term contract
      Contract length: 6 months
      
      Salary: Up to $85.00 per hour
      
      Schedule:
      
      8 hour shift
      Work Location: In person`,
      industry: "Technology",
      fullName: "John Doe",
      phoneNumber: "123-456-7890",
      email: "john.doe@example.com",
      linkedIn: "https://www.linkedin.com/in/johndoe",
      personalLink: "https://www.johndoe.com",
      role: "Software Developer",
      company: "ABC Tech",
      description:
        "Worked as a full stack developer and DBA in a small team of 5, managed projects using Jira...",
     
      degree: "Bachelor of Science",
      schoolName: "University of XYZ",
      skills: "React, JavaScript, Node.js, HTML, CSS",
      projectTitle: "Portfolio Website",
      projectDescription:
        "Created a personal portfolio website using latest fullstack technologies....",
    };

    setjobDetails(predefinedData.jobDetails);
    setIndustry(predefinedData.industry);
    setFullName(predefinedData.fullName);
    setPhoneNumber(predefinedData.phoneNumber);
    setEmail(predefinedData.email);
    setLinkedIn(predefinedData.linkedIn);
    setPersonalLink(predefinedData.personalLink);
    setRole(predefinedData.role);
    setCompany(predefinedData.company);
    setDescription(predefinedData.description);
    // setCompanyInfo(predefinedData.companyInfo);
    setDegree(predefinedData.degree);
    setSchoolName(predefinedData.schoolName);
    setSkills(predefinedData.skills);
    setProjectTitle(predefinedData.projectTitle);
    setProjectDescription(predefinedData.projectDescription);
  };

  

  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      skills,
      projectDescription,
    });
   

    const formData = new FormData();

    formData.append("jobDetails", jobDetails);
    formData.append("industry", industry);

    formData.append("fullName", fullName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("linkedIn", linkedIn);
    formData.append("personalLink", personalLink);

    formData.append("skills", skills);

    formData.append("projectTitle", projectTitle);
    formData.append("projectDescription", projectDescription);

    console.log({
      jobDetails: jobDetails,
      industry: industry,
      fullName: fullName,
      phoneNumber: phoneNumber,
      email: email,
      linkedIn: linkedIn,
      personalLink: personalLink,
      role: role,
      company: company,
      description: description,
      degree: degree,
      schoolName: schoolName,
      skills: skills,
      projectTitle: projectTitle,
      projectDescription: projectDescription,
    });

    axios
      .post("http://localhost:4000/api/coverletter/create", {
        jobDetails: jobDetails,
        industry: industry,
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        linkedIn: linkedIn,
        personalLink: personalLink,
        role: role,
        company: company,
        description: description,
        degree: degree,
        schoolName: schoolName,
        skills: skills,
        projectTitle: projectTitle,
        projectDescription: projectDescription,
      })
      .then((res) => {
        if (res.data.message) {
          const experienceData = res.data.data.experienceGenerated;
          const educationGenerated = res.data.data.educationGenerated;
          console.log("education");
          console.log(educationGenerated);
          const skillsGenerated = res.data.data.skillsGenerated;
          const projectGenerated = res.data.data.projectGenerated;

          // state object
          const coverletterData = {
            fullName,
            phoneNumber,
            email,
            linkedIn,
            personalLink,
            role,
            company,
            degree,
            schoolName,
            projectTitle,
            experienceData,
            educationGenerated,
            skillsGenerated,
            projectGenerated,
          };

          console.log(coverletterData);
          navigate("/coverletter", { state: { coverletterData } });
        }
      })
      .catch((err) => console.error(err));
    setLoading(true);
  };

  return (
    <div className="wrapper">
		<div className="wrapper_inner">
			<div className="vertical_wrap">
			<div className="backdrop"></div>
			<div className="vertical_bar">
				
      <ul className="menu-coverletter">
 
  <li>
    <a href="#customize" 
       onClick={(e) => handleSectionClick(e, "customize")}
       className={activeSection === "customize" ? "active" : ""}>
      <span className="text">Customize Cover Letter</span>
    </a>
  </li>
  <li>
    <a href="#contact" 
       onClick={(e) => handleSectionClick(e, "contact")}
       className={activeSection === "contact" ? "active" : ""}>
      <span className="text">Contact Info</span>
    </a>
  </li>
  <li>
    <a href="#experience" 
       onClick={(e) => handleSectionClick(e, "experience")}
       className={activeSection === "experience" ? "active" : ""}>
      <span className="text">Experience</span>
    </a>
  </li>
  <li>
    <a href="#education" 
       onClick={(e) => handleSectionClick(e, "education")}
       className={activeSection === "education" ? "active" : ""}>
      <span className="text">Education</span>
    </a>
  </li>
  <li>
    <a href="#skills" 
       onClick={(e) => handleSectionClick(e, "skills")}
       className={activeSection === "skills" ? "active" : ""}>
      <span className="text">Skills</span>
    </a>
  </li>
  <li>
    <a href="#projects" 
       onClick={(e) => handleSectionClick(e, "projects")}
       className={activeSection === "projects" ? "active" : ""}>
      <span className="text">Projects</span>
    </a>
  </li>
</ul>


				
			</div>
		</div>
    <div className="container">
        
      <form
        onSubmit={handleFormSubmit}
        method="POST"
        encType="multipart/form-data"
      > 
        
        
        <div id="customize" className={activeSection === "customize" ? "active" : "hidden"}>
        <div>
            <label htmlFor="industry">Industry</label>
            <input
              type="text"
              name="industry"
              className="currentInput"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>
        <label htmlFor="jobDetails">Job Details</label>
          <textarea
            type="text"
            name="jobDetails"
            id="jobDetails"
            value={jobDetails}
            onChange={(e) => setjobDetails(e.target.value)}
          />
          
        </div>
        <div id="contact" className={activeSection === "contact" ? "active" : "hidden"}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            required
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            required
            name="email"
            className="currentInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            required
            name="phoneNumber"
            className="currentInput"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label htmlFor="linkedIn">
            <strong>LinkedIn </strong>URL
          </label>
          <input
            type="text"
            required
            name="linkedIn"
            className="currentInput"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
          <label htmlFor="personalLink">
            <strong>Personal Website </strong>OR Relevant Links
          </label>
          <input
            type="text"
            name="personalLink"
            className="currentInput"
            value={personalLink}
            onChange={(e) => setPersonalLink(e.target.value)}
          />
        </div>
        <section id="experience" className={activeSection === "experience" ? "active" : "hidden"}>
        <div className="companies">
          <label htmlFor="role">Position</label>
          <input
            type="text"
            name="role"
            value={role}
            required
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="companies">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            value={company}
            required
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="companies">
          <label htmlFor="description">Description of Your Position</label>
          <textarea
            type="text"
            value={description}
            name="description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        </section>
        
        <section id="education" className={activeSection === "education" ? "active" : "hidden"}>
        <div>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            required
            name="degree"
            className="currentInput"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="schoolName">University Name</label>
          <input
            type="text"
            required
            name="schoolName"
            className="currentInput"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </div>
        </section>
       
        <section id="skills" className={activeSection === "skills" ? "active" : "hidden"}>
          <div>
            <label htmlFor="skills">Enter the Skills You Possess</label>
            <textarea
              type="text"
              required
              name="skills"
              className="currentInput"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
        </section>


        <section id="projects" className={activeSection === "projects" ? "active" : "hidden"}>
          <div>
            <label htmlFor="projectTitle">Give Your Project a Title</label>
            <input
              type="text"
              required
              name="projectTitle"
              className="currentInput"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="projectDescription">
              Description of Your Project
            </label>
            <textarea
              type="text"
              required
              name="projectDescription"
              className="currentInput"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
            <button>CREATE MY COVER LETTER</button>
          </div>
        </section>

        
      </form>
    </div>
    </div>
	</div> 
  );
};

export default CreatCoverLetter;
