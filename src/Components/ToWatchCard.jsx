import React from 'react';
import '../css/CardList.css';

class ToWatchCard extends React.Component {
  
  state = {
    checked: true,
  };

  setChecked = (event) => {
    const { status } = this.props;
    console.log(event.target.checked);
    this.setState({ checked: event.target.checked });
  };

  render() {
    const { title, status } = this.props;
    // const { checked } = this.state;
    return (
      <div className="card">
        <label> <input type="checkbox" checked={status} onChange={this.setChecked} /> {title} </label>
      </div>
      );
  }
  
};

export default ToWatchCard;