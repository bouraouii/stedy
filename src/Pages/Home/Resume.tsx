import React from "react";
import { Button } from "react-bootstrap";

function Resume() {
  return (
    <div className="d-flex justify-content-center">
      <Button
        variant="primary"
        // href={pdf}
        target="_blank"
        style={{ maxWidth: "250px" }}
      >
        Download Resume
      </Button>
    </div>
  );
}

export default Resume;
