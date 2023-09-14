import React from "react";
import resume from "../images/resume.pdf";

const Resume = () => {
  return (
    <object
      data={resume}
      width="100%"
      height="100%"
    />
  );
};

export default Resume;
