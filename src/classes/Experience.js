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
        <div className="duration badge badge-primary ml-2">
          {this.props.experience.duration}
        </div>
        <div className="date-range">
          From {this.props.experience.startDate} till {this.props.experience.endDate}
        </div>
        <ul className="description">
          {this.props.experience.descriptions.map((description, index) => (
            <li className="description"
              key={this.props.experience.name + "-" + index}>
              {description}
            </li>
          ))}
        </ul>
        <div className="skills">
          {this.props.experience.skills.map(skill => (
            <div className="skill badge badge-skill mt-2 mr-2"
              key={this.props.experience.name + "-" + skill}>
              {skill}
            </div>
          ))}
          {this.props.experience.technologies.map(technology => (
            <div className="skill badge badge-technology mt-2 mr-2"
              key={this.props.experience.name + "-" + technology}>
              {technology}
            </div>
          ))}
          {this.props.experience.softSkills.map(softSkill => (
            <div className="skill badge badge-soft-skill mt-2 mr-2"
              key={this.props.experience.name + "-" + softSkill}>
              {softSkill}
            </div>
          ))}
        </div>
      </div>
    );


  }
}

export default Experience;
