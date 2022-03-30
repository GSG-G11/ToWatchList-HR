import React from 'react';
import '../css/CardList.css';
// import ToWatch from './ToWatch';
import movies from '../movies.js'

class CardList extends React.Component{

  state = {
    checked: false,
  };

  setChecked = (event) => {
    console.log(event.target.checked);
    this.setState({ checked: event.target.checked });
  };

  render () {
    // const { checked } = this.state;

    return (
      <div className="card-list">
        <div className="left-card-side">
          <h3>To Watch</h3>
          <div className="card">
            <label>   <input type="checkbox" checked={movies[0].status} onChange={() => {movies[0].status = false}} /> {movies[0].title} </label>
          </div>
          <div className="card">
            <label>   <input type="checkbox" checked={movies[1].status} onChange={this.setChecked} /> {movies[1].title} </label>
          </div>
        </div>

        {/* <ToWatch /> */}
        <div className="left-card-side">
        <h3>Finished</h3>
        <div className="card">
            <label> <input type="checkbox" name="" /> title of the movie</label>
          </div>
        </div>
      </div>
    );
  }

};

export default CardList;