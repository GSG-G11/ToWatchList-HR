import React from 'react';
import '../css/CardList.css';
import Finished from './Finished';
import ToWatch from './ToWatch';

const CardList = ({movies, change, deleteItem}) => {
    return (
      <div className="card-list">
        <ToWatch moviesList={movies}  change={change} deleteItem={deleteItem}/>
        <Finished moviesList={movies}  change={change} deleteItem={deleteItem}/>
      </div>
    );
};

export default CardList;