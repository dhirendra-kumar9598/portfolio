import React, { useMemo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

function PDFViewer({ path }) {
  const [numPages, setNumPages] = useState(null);
  const file = useMemo(() => ({ url: "/certi/js.pdf" }), []);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      {path.type == "pdf" ? (
        <Document
          file={`certi/${path.path}`}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(err) => console.error("PDF load error:", err)}
          onSourceError={(err) => console.error("PDF source error:", err)}
        >
          {numPages && <Page key="page_1" pageNumber={1} width={300} />}
        </Document>
      ) : (
        <img src={`certi/${path.path}`} style={{width:"300px"}} />
      )}
    </div>
  );
}

export default PDFViewer;
