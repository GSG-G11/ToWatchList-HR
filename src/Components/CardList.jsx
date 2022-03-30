import React from 'react';
import '../css/CardList.css';
import Finished from './Finished';
import ToWatch from './ToWatch';

class CardList extends React.Component{

  state = {
    movies : [{title: 'The Hunger Games', status: true}, {title: 'The React Game', status: false}],
  };

  setHandelChange = (event) => {
    let movies = [...this.state.movies];  
    let index = movies.findIndex(el => el.title === event.target.name);
    movies[index].status = event.target.checked;                  
    this.setState({ movies }); 
  };

  render () {
    const {  movies } = this.state;
    return (
      <div className="card-list">
        <ToWatch moviesList={movies}  change={this.setHandelChange}/>
        <Finished moviesList={movies}  change={this.setHandelChange}/>
      </div>
    );
  }

};

export default CardList;