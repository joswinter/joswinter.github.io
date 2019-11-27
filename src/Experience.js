import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <div className="Experience">
        <div className="Name">{this.props.company}</div>
        <div className="Function">{this.props.function}</div>
        <div className="Duration">{this.duration(this.props.startDate,
                                                 this.props.endDate)}</div>
        <div className="StartDate">{this.props.startDate}</div>
        <div className="EndDate">{this.props.endDate}</div>
        {this.props.skills.map(skill => (
          <div className="Skills">{skill}</div>
        ))}
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
      return months + ' months';
    }
    return years + ' years and ' + months + ' months';
  }
}

export default Experience;
