import React, { useState, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import axios from "axios";
import Contact from "./Contact/Contact.jsx";
import Loading from "./Loading/Loading";
//import { PDFExport } from "@progress/kendo-react-pdf"; // Import PDFExport from the correct package

export const FinalResume = () => {
  const [formData, setFormData] = useState(new FormData());
  const [loading, setLoading] = useState(false);
  //const pdfExportComponent = React.useRef(null);

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPosition = localStorage.getItem("newPosition");
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
    const projectDescription = localStorage.getItem("projectDescription");

    const formData = new FormData();

    formData.append("newPosition", newPosition);
    formData.append("industry", industry);

    formData.append("fullName", fullName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("linkedIn", linkedIn);
    formData.append("personalLink", personalLink);

    formData.append("role1", role1);
    formData.append("company1", company1);
    formData.append("date1", date1);
    formData.append("location1", location1);
    formData.append("description1", description1);

    formData.append("role2", role2);
    formData.append("company2", company2);
    formData.append("date2", date2);
    formData.append("location2", location2);
    formData.append("description2", description2);

    formData.append("degree", role2);
    formData.append("location", company2);
    formData.append("schoolName", date2);
    formData.append("graduation", location2);

    formData.append("skills", description2);

    formData.append("projectTitle", date2);
    formData.append("projectDescription", location2);

    axios
      .post("http://localhost:4000/resume/create", formData, {})
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
        onSubmit={handleFormSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        <div className="container">
          <h2>
            New Role:
            {"\n" + localStorage.getItem("newPosition")}
          </h2>
          <p>
            Industry
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
            <p>Email :{"\n" + localStorage.getItem("email")}</p>
            <p>linkedIn :{"\n" + localStorage.getItem("linkedIn")}</p>
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
            <p>Date :{"\n" + localStorage.getItem("date1")}</p>
            <p>Location :{"\n" + localStorage.getItem("location1")}</p>
            <p>
              Description:
              {"\n" + localStorage.getItem("description1")}
            </p>
            <br />
            <h2>Experience 2</h2>
            <p>
              Position:
              {"\n" + localStorage.getItem("role2")}
            </p>
            <p>
              Company Name:
              {"\n" + localStorage.getItem("company2")}
            </p>
            <p>Date :{"\n" + localStorage.getItem("date2")}</p>
            <p>Location :{"\n" + localStorage.getItem("location2")}</p>
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
            <p>Location :{"\n" + localStorage.getItem("location")}</p>
            <p>Graduation Date :{"\n" + localStorage.getItem("graduation")}</p>
          </div>

          <br />

          <div>
            <h2>Skills</h2>
            <p>Skills :{"\n" + localStorage.getItem("skills")}</p>
          </div>

          <br />

          <div>
            <h2>Project</h2>
            <p>Project Name :{"\n" + localStorage.getItem("projectTitle")}</p>
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
