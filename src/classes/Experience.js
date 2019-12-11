import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <div className="experience">
        <button type="button" class="btn btn-primary m-2">
          {this.props.experience.company} - {this.props.experience.function}
          <span class="badge badge-light ml-2">{this.props.experience.duration}</span>
        </button>
        {this.props.experience.skills.map(skill => (
          <span class="badge badge-secondary m-2 p-2">{skill}</span>
        ))}
      </div>
    );
  }
}

export default Experience;
