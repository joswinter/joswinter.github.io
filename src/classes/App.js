import React from 'react';
import Experience from './Experience';
import experiences from '../data/experiences.json';
import info from '../data/info.json';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <span className="btn btn-primary m-2">{info.name}</span>
        <span className="btn btn-primary m-2">{info.profession}</span>
        {experiences.map((experience, index) => (<Experience className={experience.company + "-" + index} experience={experience}/>))}
      </div>
    );
  }
}

export default App;
