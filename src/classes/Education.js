import React from 'react';

class Education extends React.Component {
  render() {
    return (
      <div className="education">
        <button type="button" class="btn btn-primary m-2">
          {this.props.education.institute} - {this.props.education.type}
          <span class="badge badge-light ml-2">{this.props.education.duration}</span>
        </button>
        {this.props.education.courses.map(course => (
          <span class="badge badge-secondary m-2 p-2">{course}</span>
        ))}
      </div>
    );
  }
}

export default Education;
