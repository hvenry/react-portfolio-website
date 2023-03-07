import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';

function Experience() {
  return <div>
    <VerticalTimeline lineColor="#3e497a">
      {/* school */}
      <VerticalTimelineElement 
      className="vertical-timeline-element--education"
      date="2010 - 2014"
      iconStyle={{ background: '#3e497a', color: '#fff' }}
      icon={<SchoolIcon />}
      >
      <h3 className="vertical-timeline-element-title">Queen's University</h3>
      <p> Bachelor of Computer Science </p>
      </VerticalTimelineElement>

      {/* school */}
      <VerticalTimelineElement 
      className="vertical-timeline-element--education"
      date="2010 - 2014"
      iconStyle={{ background: '#3e497a', color: '#fff' }}
      icon={<SchoolIcon />}
      >
      <h3 className="vertical-timeline-element-title">Queen's University</h3>
      <p> Bachelor of Computer Science </p>
      </VerticalTimelineElement>

      {/* school */}
      <VerticalTimelineElement 
      className="vertical-timeline-element--education"
      date="2010 - 2014"
      iconStyle={{ background: '#3e497a', color: '#fff' }}
      icon={<SchoolIcon />}
      >
      <h3 className="vertical-timeline-element-title">Queen's University</h3>
      <p> Bachelor of Computer Science </p>
      </VerticalTimelineElement>

      {/* school */}
      <VerticalTimelineElement 
      className="vertical-timeline-element--education"
      date="2010 - 2014"
      iconStyle={{ background: '#3e497a', color: '#fff' }}
      icon={<SchoolIcon />}
      >
      <h3 className="vertical-timeline-element-title">Queen's University</h3>
      <p> Bachelor of Computer Science </p>
      </VerticalTimelineElement>
      
    </VerticalTimeline>
  </div>;
}

export default Experience