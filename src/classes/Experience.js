import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <div className="story experience">
        <div className="container">
          <h2>
            <span className="highlight mr-2">
              {this.props.experience.function}
            </span>
            at
            <span className="highlight m-2">
              {this.props.experience.company}
            </span>
            for
            <div className="badge badge-primary ml-3">
              {this.props.experience.duration}
            </div>
          </h2>
          <p>
            From {this.props.experience.startDate} till {this.props.experience.endDate}
          </p>
          {this.props.experience.skills.map(skill => (
              <div className="skill badge badge-success mr-2">{skill}</div>
            ))}
          </div>
      </div>
    );
  }
}

export default Experience;
