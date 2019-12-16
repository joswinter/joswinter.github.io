import React from 'react';
import Experience from './Experience';

class ExperienceGroup extends React.Component {
  render() {
    return (
      <div className="experience-group">
        <h2>{this.props.experiences.name}</h2>
        {this.props.experiences.experiences.map((experience) => (
          <Experience experience={experience}
            key={experience.name} />
        ))}
      </div>
    );
  }
}

export default ExperienceGroup;
