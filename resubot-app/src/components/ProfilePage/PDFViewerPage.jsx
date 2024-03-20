import React, { useEffect } from 'react';
import logo from "../../assets/logo.png"; // Import your logo
import './PDFViewerPage.scss'; // Import your CSS file for styling

const PDFViewerPage = ({ pdfUrl }) => {
  useEffect(() => {
    // Open the PDF in a new window when the component mounts
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <html>
        <head>
          <title>PDF Viewer</title>
          <style>
            body {
              margin: 0;
            }
            header {
              background-color: #f0f0f0;
              padding: 20px;
              display: flex;
              align-items: center;
            }
            header img {
              height: 40px;
              margin-right: 10px;
            }
            header h1 {
              margin: 0;
            }
            main {
              padding: 20px;
            }
            embed {
              width: 100%;
              height: 600px;
            }
          </style>
        </head>
        <body>
          <header>
            <img src="${logo}" alt="Logo" />
            <h1>PDF Viewer</h1>
          </header>
          <main>
            <embed src="${pdfUrl}" type="application/pdf" />
          </main>
        </body>
      </html>
    `);

    // Close the new window when the component unmounts
    return () => {
      newWindow.close();
    };
  }, [pdfUrl]);

  // Render an empty div as the PDF content is rendered in a new window
  return <div></div>;
};

export default PDFViewerPage;
