import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading/Loading";
import "./FinalResume/Finalresume.scss";

const FinalResume = () => {
  let resumeDisplayPath = "/resume1";

  //To Cutomize Resume for new position
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
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  //Compnay information
  // const [companyInfo, setCompanyInfo] = useState([
  //   { role: "", company: "", start: "", location: "", description: "" },
  // ]);

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

  const [loading, setLoading] = useState(false);
  //const pdfExportComponent = React.useRef(null);
  const navigate = useNavigate();

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
      date: "January 2020",
      location: "New York, NY",
      description:
        "Worked as a full stack developer and DBA in a small team of 5, managed projects using Jira...",
      // companyInfo: [
      //   {
      //     role: "Software Developer",
      //     company: "ABC Tech",
      //     start: "January 2020",
      //     location: "New York, NY",
      //     description: "Worked as a full stack developer and DBA in a small team of 5, managed projects using Jira...",
      //   }
      //   // Add more work history data as needed
      // ],
      degree: "Bachelor of Science",
      schoolName: "University of XYZ",
      schoolLocation: "Los Angeles, CA",
      graduation: "May 2019",
      grades:
        "data structures and algorithms: 85%, advanced java programming: 99%, python programming: 90%, intro to django: 90%, Advanced unit testing: 100%, Intro to pyUnit: 90%, Advanced databases: 75%, Leadership in Business: 50%, Accounting: 80%, Intro to Psychology: 88%, Physical Living 2000: 80%",
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
    setDate(predefinedData.date);
    setCompany(predefinedData.company);
    setLocation(predefinedData.location);
    setDescription(predefinedData.description);
    // setCompanyInfo(predefinedData.companyInfo);
    setDegree(predefinedData.degree);
    setSchoolName(predefinedData.schoolName);
    setSchoolLocation(predefinedData.schoolLocation);
    setGraduation(predefinedData.graduation);
    setGrades(predefinedData.setGrades);
    setSkills(predefinedData.skills);
    setProjectTitle(predefinedData.projectTitle);
    setProjectDescription(predefinedData.projectDescription);
  };

  // //updates the state with user's input
  // const handleAddCompany = () =>
  //   setCompanyInfo([
  //     ...companyInfo,
  //     { role: "", company: "", start: "", location: "", description: "" },
  //   ]);

  // // removes a selected item from the list
  // const handleRemoveCompany = (index) => {
  //   const list = [...companyInfo];
  //   list.splice(index, 1);
  //   setCompanyInfo(list);
  // };

  // // updates an item within the list
  // const handleUpdateCompany = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...companyInfo];
  //   list[index][name] = value;
  //   setCompanyInfo(list);
  //   localStorage.setItem("companyInfo", JSON.stringify(list));
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();

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
          navigate(resumeDisplayPath, { state: { resumeData } });
          axios
            .post("http://localhost:4000/api/resume/save", {
              experienceData,
              educationGenerated,
              skillsGenerated,
              projectGenerated,
            })
            .then((response) => {
              console.log("succesfully saved chatGPT data to database ");
            })
            .catch((error) => {
              // Handle errors
              console.error("Error saving data", error);
            });

          // save input data in input data of user table
          axios
            .post("http://localhost:4000/api/resume/saveInputData", {
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
            })
            .then((response) => {
              console.log("succesfully saved input data to database ");
            })
            .catch((error) => {
              // Handle errors
              console.error("Error saving data", error);
            });
        }
      })
      .catch((err) => console.error(err));
    setLoading(true);
  };

  return (
    <div className="container">
      <form
        onSubmit={handleFormSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        {/*DEMO */}
        <button
          onClick={fillFormWithData}
          className="button is-small is-danger"
        >
          Fill with Predefined Data
        </button>
        <label htmlFor="jobDetails">Job Details</label>
        <div className="cutomize">
          <textarea
            type="text"
            name="jobDetails"
            id="jobDetails"
            value={jobDetails}
            onChange={(e) => setjobDetails(e.target.value)}
          />
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
          <br />
        </div>
        <div className="contactInfo">
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
        <br />
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
          <label htmlFor="role">Title</label>
          <input
            type="text"
            name="role"
            value={role}
            required
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="verticalcontainer">
          <div className="companies">
            <label htmlFor="date">Date or Date Range</label>
            <input
              type="text"
              name="date"
              placeholder="May 23 - Present"
              className="subInput"
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="companies">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              className="subInput"
              value={location}
              required
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
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
          <br />
        </div>
        <br />
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
        <br />
        <div>
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
        </div>

        <br />

        <div>
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
          </div>
        </div>

        <button>CREATE RESUME</button>
      </form>
    </div>
  );
};

export default FinalResume;
