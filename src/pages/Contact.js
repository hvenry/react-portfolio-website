import React from 'react'
import '../styles/Contact.css'
import Resume from '../assets/HenryVendittelliResume.pdf'
import GetAppIcon from '@material-ui/icons/GetApp'

function Contact() {
  return(
    <div className="contact">
      <h1>
        Contact (TODO)
      </h1>

      <div className="socialMedia">
        <h2>Resume</h2>
        <a href={Resume} target="_blank" rel="noreferrer">
            <GetAppIcon />
        </a>
      </div>
      
    </div>
  );
}

export default Contact