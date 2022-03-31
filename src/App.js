import React from 'react';
import './App.css';
import CardList from './Components/CardList';
import Form from './Components/Form';



class App extends React.Component {

  state = {
    movies: [
      {
        title: "Adam's Project",
        status: true
      },
      { title: 'The Hunger Games', status: true }, { title: 'The React Game', status: false }
    ]
  }

  AddMovie = (movie) => {
    this.setState({ movies: [...this.state.movies, movie] })
  }

  setHandelChange = (event) => {
    let movies = [...this.state.movies];
    let index = movies.findIndex(el => el.title === event.target.name);
    movies[index].status = event.target.checked;
    this.setState({ movies });
  };

  deleteItem = (event) => {
    let moviesCopy = [...this.state.movies];
   const  movies = moviesCopy.filter(item => item.title !== event);
    this.setState({ movies });
  };

  render() {
    return (
      <React.Fragment>
        <Form movie={this.AddMovie} />
        < CardList movies={this.state.movies} change={this.setHandelChange} deleteItem={this.deleteItem}/>
      </React.Fragment>
    );
  }
}

export default App;
