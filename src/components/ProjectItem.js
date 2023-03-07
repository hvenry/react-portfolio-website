import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    // the useNavigate hook allows us to navigate to a different page 
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
