import React from 'react';
import Experience from './Experience';

class App extends React.Component {
  render() {
    const name = 'Jos Winter'
    const experiences = [
      {
        company: 'Adyen',
        function: 'Software Engineer',
        startDate: '2018-09',
        endDate: 'now',
        skills: [
          'java', 'sql'
        ]
      },
      {
        company: 'Adyen',
        function: 'Graduate Intern',
        startDate: '2017-11',
        endDate: '2018-09',
        skills: [
          'java', 'sql'
        ]
      },
      {
        company: 'TU Delft',
        function: 'Bachelor Graduate Intern',
        startDate: '2016-03',
        endDate: '2016-06',
        skills: [
          'python'
        ]
      },
      {
        company: 'TU Delft',
        function: 'Research Intern',
        startDate: '2014-11',
        endDate: '2016-03',
        skills: [
          'haskell', 'f#'
        ]
      },
      {
        company: 'Synetic',
        function: 'Web Developer',
        startDate: '2014-06',
        endDate: '2016-01',
        skills: [
          'php', 'js', 'sql', 'html'
        ]
      }
    ]
    return (
      <div className="App">
        <div className="Name">{name}</div>
        {
          experiences.map(experience => (
          <Experience
            company={experience.company}
            function={experience.function}
            startDate={experience.startDate}
            endDate={experience.endDate}
            skills={experience.skills}
          />
          ))
        }
      </div>
    );
  }
}

export default App;
