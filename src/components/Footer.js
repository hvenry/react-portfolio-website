import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import "../styles/Footer.css"

function Footer() {
  return <div className="footer">
        <div className="socialMedia">
            <a href="https://www.linkedin.com/in/henryvendittelli/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
            </a>
            <a href="https://github.com/hvenry" target="_blank" rel="noreferrer">
            <GitHubIcon />
            </a>
            <a href="https://www.facebook.com/hvenry" target="_blank" rel="noreferrer">
            <FacebookIcon />
            </a>
        </div>
        <p> Henry Vendittelli 2023</p>
    </div>
}

export default Footer