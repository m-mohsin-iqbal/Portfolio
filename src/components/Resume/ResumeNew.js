import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Mohsin-Iqbal-Resume.pdf";
import Pagination from "react-bootstrap/Pagination";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://mohsin-resume.s3.ap-south-1.amazonaws.com/Mohsin-Iqbal-Resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadError={(error) => console.log("error:", error)}
          >
            <Page pageNumber={currentPage} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
          <Pagination className="justify-content-center mt-3">
          <Pagination.Item onClick={()=>setCurrentPage(1)} active={currentPage===1}>{1}</Pagination.Item>
          <Pagination.Item onClick={()=>setCurrentPage(2)} active={currentPage===2}>{2}</Pagination.Item>
          </Pagination>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
