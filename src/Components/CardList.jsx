import React from 'react';
import '../css/CardList.css';
import Finished from './Finished';
import ToWatch from './ToWatch';

const CardList = ({movies, change}) => {
    return (
      <div className="card-list">
        <ToWatch moviesList={movies}  change={change}/>
        <Finished moviesList={movies}  change={change}/>
      </div>
    );
};

export default CardList;