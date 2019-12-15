import React from 'react';
import Experience from './Experience';
import Education from './Education';
import experiences from '../data/experiences.json';
import educations from '../data/educations.json';
import info from '../data/info.json';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div class="area" >
          <ul class="circles">
            <li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li>
          </ul>
        </div>
        <div className="context">
          <div className="container">
            <h1>Hi, I'm Jos Winter</h1>
            <p>
                Currently working as a software engineer. Passionate about beautiful software architecture, algorithmics, and solving technical problems using programming.
                You can contact me through <a href="https://www.linkedin.com/in/joswinter/">LinkedIn</a> or drop me an <a href="mailto:info@joswinter.nl">email</a>.
            </p>
          </div>
        </div>
        <div className="stories experiences">
          {experiences.map((experience, index) => (<Experience className={experience.company + "-" + index} experience={experience}/>))}
        </div>
        <div className="stories educations">
          {educations.map((education, index) => (<Education className={education.institute + "-" + index} education={education}/>))}
        </div>
      </div>
    );
  }

  // <div className="stories experiences">
  //   {experiences.map((experience, index) => (<Experience className={experience.company + "-" + index} experience={experience}/>))}
  // </div>
  // <div className="stories educations">
  //   {educations.map((education, index) => (<Education className={education.institute + "-" + index} education={education}/>))}
  // </div>
}

export default App;
