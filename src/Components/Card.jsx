import React from 'react';
import '../css/CardList.css';

const  Card = ({ change, title, status, deleteItem }) => {
    return (
      <div className="card">
        <label> <input type="checkbox"  checked={status} onChange={change} name={title} /> {title} </label>
        <i className='fa fa-trash delete' onClick={() => deleteItem(title)}></i>
      </div>
      );
};

export default Card;