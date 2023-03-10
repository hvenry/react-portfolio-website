import React from 'react'
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import "react-vertical-timeline-component/style.min.css";
// import SchoolIcon from '@material-ui/icons/School';
import "../styles/Experience.css"
import pfp from "../assets/images/about_me.jpeg"

function Experience() {
  return <div className="about">
    <h2>About Me</h2>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img src={pfp} alt="" />
    </div>

    <p>
    Hello! My name is Henry, and welcome to my portfolio website! I am an undergraduate student at Queen's University studying computing and specializing in cognitive science. I am a passionate student and even more passionate about artificial intelligence, machine learning, software development, web design, game design, photo/video editing... basically anything that can be done on a computer. Apart from computers, I enjoy cooking, critiquing fashion and music, and playing competitive hockey whenever I get the chance. Alongside with my passions and hobbies, I am always looking to connect with new people, whether you share the same passion for computers as me or not, feel free to reach out! <br></br><br></br>
    My interest in AI-specific opportunities can be attributed to its implementations which have been rapidly growing in recent years due to the increasing recognition of AI's potential to revolutionize industries with data analysis, machine learning, and data visualization. The education that I am currently pursuing never shies away from AI-related substances, and I am part of an innovative design team for QMIND, which is the largest undergraduate AI/ML organization in Canada. Through my education and extracurriculars, I am confident using Python and many of its libraries such as (TensorFlow, Keras, numpy, pandas, re, Matplotlib) to complete ML tasks with regard to preprocessing, tokenization, and creating models. My passion for AI is driven by the idea of technology that prioritizes the welfare of humanity. I recognize that technology significantly impacts our daily lives, and I am determined to utilize that impact for positive change.
    </p>

    {/* <VerticalTimeline lineColor="#000000">
      <VerticalTimelineElement 
      className="vertical-timeline-element--education"
      date="2021 - 2025"
      iconStyle={{ background: '#000000', color: '#ffffff' }}
      icon={<SchoolIcon />}
      >
      <h3 className="vertical-timeline-element-title">Queen's University</h3>
      <p> Bachelor of Computer Science </p>
      </VerticalTimelineElement>      
    </VerticalTimeline> */}
  </div>;
}

export default Experience