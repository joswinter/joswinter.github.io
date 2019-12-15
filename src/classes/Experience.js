import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <div className="experience">
        <div className="name">
          <h3>
            {this.props.experience.name}
          </h3>
        </div>
        <div className="badge badge-primary ml-3">
          <div className="duration">{this.props.experience.duration}</div>
        </div>
        <div className="date-range">
          From {this.props.experience.startDate} till {this.props.experience.endDate}
        </div>
        <ul className="description">
          {this.props.experience.descriptions.map(description => (
            <li className="description">{description}</li>
          ))}
        </ul>
        <div className="skills">
          {this.props.experience.skills.map(skill => (
            <div className="skill badge badge-skill mt-3 mr-3">{skill}</div>
          ))}
        </div>
      </div>
    );


  }
}

export default Experience;
