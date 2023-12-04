
import React from "react";
import { useReactToPrint } from "react-to-print";
import PrintableResume from "./PrintableResume";

const Resume = ({ userData, chatgptData }) => {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <h1>Resume</h1>
      {/* Display other resume data */}
      <p>Name: {userData.fullName}</p>
      <p>Position: {userData.currentPosition}</p>
      {/* ... Display other resume fields ... */}

      {/* Display ChatGPT data */}
      <h2>ChatGPT Data</h2>
      <p>ChatGPT Test Response: {chatgptData.test}</p>
      {/* Add more fields as needed based on your ChatGPT response structure */}

      {/* Export button */}
      <button onClick={handlePrint}>Export to PDF</button>

      {/* Hidden printable component */}
      <PrintableResume ref={componentRef} userData={userData} chatgptData={chatgptData} />
    </div>
  );
};

export default Resume;
