import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <div className="Experience">
        {this.duration(this.props.startDate,this.props.endDate)}
        <div className="Content">
          <div className="Name">{this.props.company}</div>
          <div className="Function">{this.props.function}</div>
          <div className="Skills">
            {this.props.skills.map(skill => (
              <div className="Skill">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  duration(start, end) {
    var startDate = new Date(start);
    var endDate;
    if (end == 'now') {
      endDate = new Date();
    } else {
      endDate = new Date(end);
    }
    var years = endDate.getYear() - startDate.getYear();
    var months = 1 + endDate.getMonth() - startDate.getMonth();

    // correct date
    if (months < 0) {
      months += 12;
      years -= 1;
    }

    if (years == 0) {
      return (
        <div className="Duration">
          <div className="Number">{months}</div>
          <div className="Type">months</div>
        </div>
      )
    } else {
      const number = years + Math.round(10 * months / 12) / 10;
      return (
        <div className="Duration">
          <div className="Number">{number}</div>
          <div className="Type">years</div>
        </div>
      )
    }
  }
}

export default Experience;
