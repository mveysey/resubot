import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { PDFExport } from "@progress/kendo-react-pdf"; // Import PDFExport from the correct package

export const FinalResume = () => {
  const [interest1, setInterest1] = useState(false); // Corrected the typo in the state variable name
  const pdfExportComponent = React.useRef(null);

  const navigate = useNavigate();

  return (
    <div>
      <h1
        style={{
          fontSize: "12px",
          fontWeight: "bold",
          display: "inline-block",
        }}
      >
        PERSONAL DETAILS:
      </h1>
      <br />
      <div
        className="container"
        style={{ marginLeft: "0%", fontSize: "11px" }}
      >
        <p>
          <b>Full Name:</b>
          {"\n" + localStorage.getItem("fullName")}
        </p>
        <p>
          <b>Phone Number: </b>
          {"\n" + localStorage.getItem("phoneNumber")}
        </p>
        <p>
          <b>Email :</b>
          {"\n" + localStorage.getItem("email")}
        </p>
        <p>
          <b>linkedIn :</b>
          {"\n" + localStorage.getItem("linkedIn")}
        </p>
        <p>
          <b>Personal Link:</b>
          {"\n" + localStorage.getItem("personalLink")}
        </p>
        <p>
          <b>Role:</b>
          {"\n" + localStorage.getItem("companyInfo")}
        </p>
      </div>
      <br />
    </div>
  );
};

export default FinalResume;