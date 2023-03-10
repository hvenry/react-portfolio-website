import React from 'react';
// use params hook to get the id from the url
import { useParams} from 'react-router-dom';
// get our project list for individual project display
import { ProjectList } from '../helpers/ProjectList';
// import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/ProjectDisplay.css';

// grab the id and display it on screen
function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1> {project.name} </h1>
            <img src={project.image} alt=""/>
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            {/* <GitHubIcon /> */}
        </div>
    );
}

export default ProjectDisplay