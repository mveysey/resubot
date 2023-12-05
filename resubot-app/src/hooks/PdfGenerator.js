import React, { useRef } from 'react';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';

const options = {
    // default is `save`
    method: 'open',
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.HIGH,
    page: {
        // margin is in MM, default is Margin.NONE = 0
        margin: Margin.SMALL,
        // default is 'A4'
        format: 'letter',
        // default is 'portrait'
        orientation: 'portrait',
    },
    canvas: {
        // default is 'image/jpeg' for better size performance
        mimeType: 'image/png',
        qualityRatio: 1
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break,
    // so use with caution.
    overrides: {
        // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
        pdf: {
            compress: true
        },
        // see https://html2canvas.hertzen.com/configuration for more options
        canvas: {
            useCORS: true
        }
    },
    filename: 'resumeFinished.pdf'
};


const PdfGenerator = ({ content }) => {
    const pdfRef = useRef();

    // Configuration for react-to-pdf
    const options = {
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
    };

    return (
        <div>
            <button className={"button is-dark m-2 is-primary"} onClick={() => generatePDF(pdfRef, options)}>Generate PDF</button>
            <div ref={pdfRef} id="content-id">
                {content}
            </div>
        </div>
    );
};

export default PdfGenerator;
