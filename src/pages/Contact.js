import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Contact() {
  return(
    <div>
      Hello! Click the logo to navigate to the site
      <a href="https://www.linkedin.com/in/henryvendittelli/" target="_blank" rel="noreferrer">
        <LinkedInIcon />
      </a>
    </div>
  );
}

export default Contact