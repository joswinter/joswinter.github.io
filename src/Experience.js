import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <div className="Experience">
        <div className="Name">{this.props.company}</div>
        <div className="StartDate">{this.props.startDate}</div>
        <div className="EndDate">{this.props.endDate}</div>
      </div>
    );
  }
}

export default Experience;
