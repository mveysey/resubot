import React, { useState, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading/Loading.jsx";
import "./FinalResume.scss";
//import { PDFExport } from "@progress/kendo-react-pdf"; // Import PDFExport from the correct package

export const FinalResume = () => {
  //const [formData, setFormData] = useState(new FormData());
  const [newPosition, setNewPosition] = useState("");
  const [industry, setIndustry] = useState("");

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [personalLink, setPersonalLink] = useState("");

  const [companyInfo, setCompanyInfo] = useState([{ role: "", position: "", start: "", location: "", description: "" }]);


  const [degree, setDegree] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");
  const [graduation, setGraduation,] = useState("");

  const [skills, setSkills] = useState("");

  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const [loading, setLoading] = useState(false);
  //const pdfExportComponent = React.useRef(null);

  const navigate = useNavigate();



  //updates the state with user's input
  const handleAddCompany = () =>
  setCompanyInfo([...companyInfo, { role: "", position: "", start: "", location: "", description: "" }]);

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
    localStorage.setItem("companyInfo", JSON.stringify(list));
    };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    /*const newPosition = localStorage.getItem("newPosition");
    const industry = localStorage.getItem("industry");

    const fullName = localStorage.getItem("fullName");
    const phoneNumber = localStorage.getItem("phoneNumber");
    const email = localStorage.getItem("email");
    const linkedIn = localStorage.getItem("linkedIn");
    const personalLink = localStorage.getItem("personalLink");

    const role1 = localStorage.getItem("role1");
    const company1 = localStorage.getItem("company1");
    const date1 = localStorage.getItem("date1");
    const location1 = localStorage.getItem("location1");
    const description1 = localStorage.getItem("description1");

    const role2 = localStorage.getItem("role2");
    const company2 = localStorage.getItem("company2");
    const date2 = localStorage.getItem("date2");
    const location2 = localStorage.getItem("location2");
    const description2 = localStorage.getItem("description2");

    const degree = localStorage.getItem("degree");
    const location = localStorage.getItem("location");
    const schoolName = localStorage.getItem("schoolName");
    const graduation = localStorage.getItem("graduation");

    const skills = localStorage.getItem("skills");

    const projectTitle = localStorage.getItem("projectTitle");
    const projectDescription = localStorage.getItem("projectDescription");*/


    const formData = new FormData();
    
    formData.append("newPosition", newPosition);
    formData.append("industry", industry);

    formData.append("fullName", fullName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("linkedIn", linkedIn);
    formData.append("personalLink", personalLink);

    /*formData.append("role1", role1);
    formData.append("company1", company1);
    formData.append("date1", date1);
    formData.append("location1", location1);
    formData.append("description1", description1);

    formData.append("role2", role2);
    formData.append("company2", company2);
    formData.append("date2", date2);
    formData.append("location2", location2);
    //formData.append("description2", description2);

    
    formData.append("degree", role2);
    formData.append("location", company2);
    formData.append("schoolName", date2);
    formData.append("graduation", location2);*/

    formData.append("workHistory", JSON.stringify(companyInfo));

    formData.append("skills", skills);

    formData.append("projectTitle", projectTitle);
    formData.append("projectDescription", projectDescription);
    
    axios
    .post("http://localhost:4000/api/resume/create", formData, {})
    .then((res) => {
      if (res.data.message) {
        console.log(res.data.data);
        navigate("/resume1");
      }
    })
    .catch((err) => console.error(err));
  setLoading(true);
};

return (
    <div>
    <form
        onSubmit= {handleFormSubmit}
        method = 'POST'
        encType = 'multipart/form-data'>

    <div className="container">
    <div class="content">
      <label htmlFor="newPosition">New Position</label>
                <input
                    type ='text'
                    required name = 'newPosition'
                    id = 'newPosition'
                    value = {newPosition}
                    onChange={(e) => setNewPosition(e.target.value)}
                />
                <div>
                    <div>
                        <label htmlFor="industry">Industry</label>
                        <input
                            type='text'
                            required anme = 'industry'
                            className="currentInput"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                        />
                    </div>
                </div>
                <br/>
                <label htmlFor='fullName'>Full Name</label>
                <input
                    type ='text'
                    required name = 'fullName'
                    id = 'fullName'
                    value = {fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type='text'
                            required anme = 'email'
                            className="currentInput"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type='text'
                            required anme = 'phoneNumber'
                            className="currentInput"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />

                    </div>
                    <div>
                        <label htmlFor="linkedIn"><strong>LinkedIn </strong>URL</label>
                        <input
                            type='text'
                            required anme = 'linkedIn'
                            className="currentInput"
                            value={linkedIn}
                            onChange={(e) => setLinkedIn(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="personalLink"><strong>Personal Website </strong>OR Relevant Links</label>
                        <input
                            type='text'
                            required anme = 'personalLink'
                            className="currentInput"
                            value={personalLink}
                            onChange={(e) => setPersonalLink(e.target.value)}
                        />
                    </div>
                </div>
                <br/>
                {companyInfo.map((company, index) => (
                    <div class="nestedContainer" key={index}>
                        <div className="companies">
                            <label htmlFor="role">Position</label>
                            <input
                                type="text"
                                required name = 'role'
                                className="currentInput"
                                value={company.role}
                                    onChange={(e) => handleUpdateCompany(e, index)}
                            />
                        </div>
                        <div className="companies">
                            <label htmlFor="position">Position</label>
                            <input
                                type="text"
                                name="position"
                                required onChange={(e) => handleAddCompany(e, index)}
                            />
                        </div>
                        <div className="verticalcontainer">
                            <div className="companies">
                                <label htmlFor="position">Date or Date Range</label>
                                <input
                                    type="text"
                                    name="position"
                                    placeholder="May 23 - Present"
                                    className="subInput"
                                    required onChange={(e) => handleAddCompany(e, index)}
                                />
                            </div>
                            <div className="companies">
                                <label htmlFor="position">Location</label>
                                <input
                                    type="text"
                                    name="position"
                                    className="subInput"
                                    required onChange={(e) => handleAddCompany(e, index)}
                                />
                            </div>
                        </div>
                        <div className="companies">
                            <label htmlFor="position">Description of Your Position</label>
                            <textarea
                                type="text"
                                name="position"
                                required onChange={(e) => handleAddCompany(e, index)}
                            />
                        </div>
                        <br/>
                        
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
                <br/>
                <div>
                        <label htmlFor="degree">Degree</label>
                        <input
                            type='text'
                            required anme = 'degree'
                            className="currentInput"
                            value={degree}
                            onChange={(e) => setDegree(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="schoolName">University Name</label>
                        <input
                            type='text'
                            required anme = 'schoolName'
                            className="currentInput"
                            value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                        />

                    </div>
                    <div>
                        <label htmlFor="schoolLocation">University Location</label>
                        <input
                            type='text'
                            required anme = 'schoolLocation'
                            className="currentInput"
                            value={schoolLocation}
                            onChange={(e) => setSchoolLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="graduation">Graduation Date</label>
                        <input
                            type='text'
                            required anme = 'graduation'
                            className="currentInput"
                            value={graduation}
                            onChange={(e) => setGraduation(e.target.value)}
                        />
                    </div>
                    <br/>
                    <div>
                    <div>
                        <label htmlFor="skills">Enter the Skills You Possess</label>
                        <textarea
                            type='text'
                            required anme = 'skills'
                            className="currentInput"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                        />
                    </div>
                </div>
                
            </div>
            <br/>

            <div>
                    <div>
                        <label htmlFor="projectTitle">Give Your Project a Title</label>
                        <input
                            type='text'
                            required anme = 'projectTitle'
                            className="currentInput"
                            value={projectTitle}
                            onChange={(e) => setProjectTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="projectDescription">Description of Your Project</label>
                        <textarea
                            type='text'
                            required anme = 'projectDescription'
                            className="currentInput"
                            value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)}
                        />
                    </div>
                   
                </div>


       

    
        <button>CREATE RESUME</button>
      </div>

    </form>
      
    </div>
  );
};

export default FinalResume;