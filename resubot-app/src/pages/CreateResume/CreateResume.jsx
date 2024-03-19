import React, { useState } from "react";
import { Form, json, useNavigate } from "react-router-dom";
import axios from "axios";
import resume3 from "../../assets/resume_template3.PNG";
import resume2 from "../../assets/resume_template2.PNG";
import resume4 from "../../assets/resume_template4.PNG";
import "./CreateResume.scss";
import Loader from "../../components/Loader/Loader.jsx";

const CreateResume = () => {
  //To Select a Resume Template 
  const [selectedTemplate, setSelectedTemplate] = useState("");

  //To Cutomize Resume for new position
  const [jobDetails, setjobDetails] = useState("");
  const [industry, setIndustry] = useState("");

  //Basic Info about user
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [personalLink, setPersonalLink] = useState("");

  //Experince information 
  const [companyInfo, setCompanyInfo] = useState([{ role: "", company: "", date: "", location: "", description: "" }]);
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");


  //Education information
  const [degree, setDegree] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");
  const [graduation, setGraduation] = useState("");
  const [grades, setGrades] = useState("");

  //Skills Information
  const [skills, setSkills] = useState("");

  //Projects Information
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [activeSection, setActiveSection] = useState("templates"); // State to manage active section


  const [loading, setLoading] = useState(false);
  
  //const pdfExportComponent = React.useRef(null);
  const navigate = useNavigate();

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault(); // Prevents the default anchor link behavior
    setActiveSection(sectionId);
  };  

  const handleTemplateSelect = (templateName) => {
    setSelectedTemplate(templateName);
    let route = "";
    switch (templateName) {
      case 'resume1':
        route = "/resume1";
        break;
      case 'resume2':
        route = "/resume2";
        break;
      case 'resume3':
        route = "/resume3";
        break;
      default:
        route = "/"
    }
  };

  const handleAddCompany = () =>
    setCompanyInfo([...companyInfo, { role: "", company: "", date: "", location: "", description: "" }]);

// removes a selected item from the list
const handleRemoveCompany = (index) => {
    const list = [...companyInfo];
    list.splice(index, 1);
    setCompanyInfo(list);
};
// updates an item within the list
const handleUpdateCompany = (e, index) => {
    const { name, value } = e.target;
    const list = [...companyInfo];
    list[index][name] = value;
    setCompanyInfo(list);
};

  // Define a function to fill out the form with predefined data
 

  

  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      graduation,
      skills,
      companyInfo,
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

    formData.append("companyInfo", JSON.stringify(companyInfo))

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
      location: location,
      date: date,
      company: company,
      description: description,
      degree: degree,
      schoolName: schoolName,
      schoolLocation: schoolLocation,
      graduation: graduation,
      grades: grades,
      skills: skills,
      projectTitle: projectTitle,
      projectDescription: projectDescription,
    });

    axios
      .post("http://localhost:4000/api/resume/create", {
        jobDetails: jobDetails,
        industry: industry,
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        linkedIn: linkedIn,
        personalLink: personalLink,
        role: role,
        company: company,
        location: location,
        description: description,
        date: date,
        degree: degree,
        schoolName: schoolName,
        schoolLocation: schoolLocation,
        graduation: graduation,
        grades: grades,
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
          const resumeData = {
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

          console.log(resumeData);
          navigate("/resume1", { state: { resumeData } });
        }
      })
      .catch((err) => console.error(err));
    setLoading(true);
  };

  if (loading) {
    return <Loader />;
  } 

  return (
    <div className="wrapper">
		<div className="wrapper_inner">
			<div className="vertical_wrap">
			<div className="backdrop"></div>
			<div className="vertical_bar">
				
      <ul className="menu">
  <li>
    <a href="#templates" 
       onClick={(e) => handleSectionClick(e, "templates")}
       className={activeSection === "templates" ? "active" : ""}>
      <span className="text">Resume Templates</span>
    </a>
  </li>
  <li>
    <a href="#customize" 
       onClick={(e) => handleSectionClick(e, "customize")}
       className={activeSection === "customize" ? "active" : ""}>
      <span className="text">Customize Resume</span>
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

      <div id="templates" className={activeSection === "templates" ? "active" : "hidden"}>
        <img src={resume3} alt="Resume3" onClick={() => handleTemplateSelect('resume3')} className={selectedTemplate === 'resume3' ? 'selected' : 'hoverable'} />
        <img src={resume2} alt="Resume2" onClick={() => handleTemplateSelect('resume2')} className={selectedTemplate === 'resume2' ? 'selected' : 'hoverable'} />
        <img src={resume4} alt="Resume4" onClick={() => handleTemplateSelect('resume4')} className={selectedTemplate === 'resume4' ? 'selected' : 'hoverable'} />
      </div>
              
        
        
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
        {companyInfo.map((company, index) => (
          <div className="nestedContainer" key={index}>
            <div className="companies">
            <label htmlFor="role">Position Held</label>
            <input
              type="text"
              name="role"
              required
              onChange={(e) => handleUpdateCompany(e, index)}
            />
          </div>
          <div className="companies">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              required
              onChange={(e) => handleUpdateCompany(e, index)}
            />
          </div>
          <div className="verticalcontainer">
            <div className="companies">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                name="date"
                placeholder="May 23 - Present"
                className="subInput"
                required
                onChange={(e) => handleUpdateCompany(e, index)}
              />
            </div>
            <div className="companies">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                className="subInput"
                required
                onChange={(e) => handleUpdateCompany(e, index)}
              />
            </div>
          </div>
          <div className="companies">
            <label htmlFor="description">Description of Your Position</label>
            <textarea
              type="text"
              name="description"
              required
              onChange={(e) => handleUpdateCompany(e, index)}
            />
          </div>
          <div className='btn__group'>
              {companyInfo.length - 1 === index && companyInfo.length < 4 && (
                <button id='addBtn' onClick={handleAddCompany}>
                  Add
                </button>
              )}
              {companyInfo.length > 1 && (
                <button id='deleteBtn' onClick={() => handleRemoveCompany(index)}>
                  Del
                </button>
              )}
            </div>
          </div>
        ))}
        
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
        <div>
          <label htmlFor="schoolLocation">University Location</label>
          <input
            type="text"
            required
            name="schoolLocation"
            className="currentInput"
            value={schoolLocation}
            onChange={(e) => setSchoolLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="graduation">Graduation Date</label>
          <input
            type="text"
            required
            name="graduation"
            placeholder="May 23 - Present"
            className="currentInput"
            value={graduation}
            onChange={(e) => setGraduation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="grades">Grades</label>
          <input
            type="text"
            placeholder="Game Programming: 90%, Information Security: 99%"
            name="grades"
            className="currentInput"
            value={grades}
            onChange={(e) => setGrades(e.target.value)}
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
            <button>CREATE MY RESUME</button>
          </div>
        </section>

        
      </form>
    </div>
    </div>
	</div> 
  );
};

export default CreateResume;
