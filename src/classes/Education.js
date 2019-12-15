import React from 'react';

class Education extends React.Component {
  render() {
    return (
      <div className="story education">
        <div className="container">
          <h2>
            <span className="highlight mr-2">
              {this.props.education.type}
            </span>
            at
            <span className="highlight m-2">
              {this.props.education.institute}
            </span>
            for
            <div className="badge badge-primary ml-3">
              {this.props.education.duration}
            </div>
          </h2>
          <p>
            From {this.props.education.startDate} till {this.props.education.endDate}
          </p>
          {this.props.education.courses.map(course => (
              <div className="skill badge badge-success mr-2">{course}</div>
            ))}
          </div>
      </div>
    );
  }
}

export default Education;
