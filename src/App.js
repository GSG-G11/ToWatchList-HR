import React from 'react';
import './App.css';
import Form from './Components/Form';

class App extends React.Component{

  state ={
    movies:[{
      "title":"Adam's Project",
      status:true}]
  }

  AddMovie = (movie) =>{
    this.setState({ movies: [...this.state.movies, movie]})
  }

render(){
  return (
    <React.Fragment>
      <Form movie = {this.AddMovie}/>
    </React.Fragment>
  );
}
}

export default App;
