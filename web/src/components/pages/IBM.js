import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function IBM() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="container">
      <div className="container text-center">
        <h1>IBM Data Science Capstone Project</h1>
      </div>
      <div className="container" height="700">
        <Document
          file="IBMppt.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) =>
            console.error("Error while loading PDF:", error)
          }
          options={{ textLayer: false }}
          height={700}
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            height={700}
          />
        </Document>
      </div>
      <div className="">
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          className="btn"
          disabled={pageNumber <= 1}
          onClick={() => setTimeout(() => setPageNumber(pageNumber - 1), 500)}
        >
          Previous
        </button>
        <button
          className="btn"
          disabled={pageNumber >= numPages}
          onClick={() => setTimeout(() => setPageNumber(pageNumber + 1), 500)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
