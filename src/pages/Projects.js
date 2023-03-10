import React from 'react'
import ProjectItem from '../components/ProjectItem'

// list of projects
import { ProjectList } from '../helpers/ProjectList'

// since Project.js is above ProjectItem.js, we do not need to import css file into project item
import '../styles/Projects.css'

function Projects() {
  return (
  <div className="projects">
    <h2> Projects </h2>
    {/* display projects */}
    <div className="projectList">
      {/* map is a function in js that will loop through each element in the list */}
      {ProjectList.map((project, index) => {
        return <ProjectItem id={index} name={project.name} image={project.image} />;
      })}
    </div>
  </div>
  );
}

export default Projects