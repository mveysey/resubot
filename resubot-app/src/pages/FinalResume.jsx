import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { PDFExport } from "@progress/kendo-react-pdf"; // Import PDFExport from the correct package

export const FinalResume = () => {
  const [interest1, setInterest1] = useState(false); // Corrected the typo in the state variable name
  //const pdfExportComponent = React.useRef(null);

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
};

return (
    <div>
    <form
        onSubmit= {handleFormSubmit}
        method = 'POST'
        encType = 'multipart/form-data'>

    <div className="container">
        <h2>New Role: 
        {"\n" + localStorage.getItem("newPosition")}</h2>
        <p>Industry
        {"\n" + localStorage.getItem("industry")}
        </p>
        <br />

        <div>
            <h2>Personal Info</h2>
            <p>
            Full Name:
            {"\n" + localStorage.getItem("fullName")}
            </p>
            <p>
            Phone Number:
            {"\n" + localStorage.getItem("phoneNumber")}
            </p>
            <p>
            Email :
            {"\n" + localStorage.getItem("email")}
            </p>
            <p>
            linkedIn :
            {"\n" + localStorage.getItem("linkedIn")}
            </p>
            <p>
            Personal Link:
            {"\n" + localStorage.getItem("personalLink")}
            </p>
            
        </div>

        <br />

        <div>
            <h2>Experience 1</h2>
            <p>
            Position:
            {"\n" + localStorage.getItem("role1")}
            </p>
            <p>
            Company Name:
            {"\n" + localStorage.getItem("company1")}
            </p>
            <p>
            Date :
            {"\n" + localStorage.getItem("date1")}
            </p>
            <p>
            Location :
            {"\n" + localStorage.getItem("location1")}
            </p>
            <p>
            Description:
            {"\n" + localStorage.getItem("description1")}
            </p>
            <br/>
            <h2>Experience 2</h2>
            <p>
            Position:
            {"\n" + localStorage.getItem("role2")}
            </p>
            <p>
            Company Name:
            {"\n" + localStorage.getItem("company2")}
            </p>
            <p>
            Date :
            {"\n" + localStorage.getItem("date2")}
            </p>
            <p>
            Location :
            {"\n" + localStorage.getItem("location2")}
            </p>
            <p>
            Description:
            {"\n" + localStorage.getItem("description2")}
            </p>
            
        </div>

        <br />

        <div>
            <h2>Education</h2>
            <p>
            Degree
            {"\n" + localStorage.getItem("degree")}
            </p>
            <p>
            University:
            {"\n" + localStorage.getItem("schoolName")}
            </p>
            <p>
            Location :
            {"\n" + localStorage.getItem("location")}
            </p>
            <p>
            Graduation Date :
            {"\n" + localStorage.getItem("graduation")}
            </p>
        </div>

        <br />

        <div>
            <h2>Skills</h2>
            <p>
            Skills :
            {"\n" + localStorage.getItem("skills")}
            </p>
           
        </div>

        <br />

        <div>
            <h2>Project</h2>
            <p>
            Project Name :
            {"\n" + localStorage.getItem("projectTitle")}
            </p>
            <p>
            Project Description :
            {"\n" + localStorage.getItem("projectDescription")}
            </p>
           
        </div>
        <button>CREATE RESUME</button>
      </div>

    </form>
      
    </div>
  );
};

export default FinalResume;