import React from 'react';
import ExperienceGroup from './ExperienceGroup';
import companies from '../data/experiences.json';
import institutes from '../data/educations.json';
import info from '../data/info.json';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div class="header" >
          <ul class="circles">
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
          <div className="container">
            <h1>Hi, I'm Jos Winter</h1>
            <p>
              Currently I'm working as a software engineer. Passionate about beautiful software architecture, algorithmics, and solving technical problems using programming.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="experiences-group">
            {companies.map((experiences, index) => (<ExperienceGroup className={experiences.name + "-" + index} experiences={experiences}/>))}
          </div>
          <hr/>
          <div className="experiences-group">
            {institutes.map((experiences, index) => (<ExperienceGroup className={experiences.name + "-" + index} experiences={experiences}/>))}
          </div>
        </div>
      </div>
    );
  }


}

export default App;
