import React from 'react';
import Experience from './Experience';
import Education from './Education';
import experiences from '../data/experiences.json';
import educations from '../data/educations.json';
import info from '../data/info.json';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <span className="btn btn-primary m-2">{info.name}</span>
        <span className="btn btn-primary m-2">{info.profession}</span>

        <hr/>

        {experiences.map((experience, index) => (<Experience className={experience.company + "-" + index} experience={experience}/>))}

        <hr/>

        {educations.map((education, index) => (<Education className={education.institute + "-" + index} education={education}/>))}

      </div>
    );
  }
}

export default App;
