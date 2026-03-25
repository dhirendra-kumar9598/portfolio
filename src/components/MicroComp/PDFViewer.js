import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

function PDFViewer({ path }) {
  const [numPages, setNumPages] = useState(null);
  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  const fixedHeight = 220;
  const fixedWidth = 330;

  if (path.type !== "pdf") {
    return (
      <img
        src={`certi/${path.path}`}
        alt={path.path}
        style={{ width: '100%', height: `${fixedHeight}px`, objectFit: 'cover', borderRadius: '8px', display: 'block' }}
      />
    );
  }

  return (
    <div style={{ width: '100%', height: `${fixedHeight}px`, overflow: 'hidden', borderRadius: '8px', display: 'flex', justifyContent: 'center' }}>
      <Document
        file={`certi/${path.path}`}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(err) => console.error("PDF load error:", err)}
      >
        {numPages && (
          <Page
            pageNumber={1}
            width={fixedWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        )}
      </Document>
    </div>
  );
}

export default PDFViewer;
