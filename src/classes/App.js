import React from 'react';
import ExperienceGroup from './ExperienceGroup';
import companies from '../data/experiences.json';
import institutes from '../data/educations.json';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="header" >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="header-text">
            <div className="container">
              <h1>Hi, I'm Jos Winter</h1>
              <p>
                Currently I'm working as a software engineer.
                Passionate about beautiful software architecture, algorithmics, and solving technical problems using programming.
                You can always contact me through <a href="https://www.linkedin.com/in/joswinter/">LinkedIn</a> or you can send me an <a href="mailto:info@joswinter.nl">email</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="experiences-group">
            {companies.map((experiences, index) => (
              <ExperienceGroup
                className={experiences.name + "-" + index}
                key={experiences.name + "-" + index}
                experiences={experiences}/>
            ))}
          </div>
          <hr/>
          <div className="experiences-group">
            {institutes.map((experiences, index) => (
              <ExperienceGroup
                className={experiences.name + "-" + index}
                key={experiences.name + "-" + index}
                experiences={experiences}/>
            ))}
          </div>
        </div>
      </div>
    );
  }


}

export default App;
