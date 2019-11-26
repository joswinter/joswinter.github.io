import React from 'react';
import Experience from './Experience';

class App extends React.Component {
  render() {
    const name = 'Jos Winter'
    return (
      <div className="App">
        <div className="Name">{name}</div>
        <Experience
          company="Test Company 1"
          startDate="01-2019"
          endDate="02-2019"
        />
      </div>
    );
  }
}

export default App;
