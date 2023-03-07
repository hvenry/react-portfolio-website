import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import "../styles/Home.css"

function Home() {
  return <div className="home">
      <div className="about">
        <h2>Hello World!</h2>
        <div className="prompt">
          <p>
            My name is Henry and I am a computer science student.
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        {/*Orderd list of skills*/}
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, Yarn, MaterialUI, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, MySQL, .NET, AWS
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              JavaScript, Java, Python, C#, C, Prolog, Lua
            </span>
          </li>
        </ol>
      </div>
    </div>;
}

export default Home