import React from 'react'
import "../styles/Home.css"

function Home() {
  return <div className="home">
      <div className="prompt">
        <h2>Hello World!</h2>
        <p>
          My name is Henry and I am an undergraduate computer science student.
        </p>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        {/*Orderd list of skills*/}
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>
              Python, JavaScript, Java, C#, C, Prolog, Lua
            </span>
          </li>
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, Yarn, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, MySQL
            </span>
          </li>
        </ol>
      </div>
    </div>;
}

export default Home