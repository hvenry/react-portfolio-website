import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import "../styles/Footer.css"

function Footer() {
  return <div className="footer">
        <div className="socialMedia">
            <LinkedInIcon />
            <GitHubIcon />
            <FacebookIcon />
        </div>
        <p> Henry Vendittelli 2023</p>
    </div>
}

export default Footer