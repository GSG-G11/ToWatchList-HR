import React from 'react';
import '../css/CardList.css';

const  Card = ({ change, title, status }) => {
    return (
      <div className="card">
        <label> <input type="checkbox"  checked={status} onChange={change} name={title} /> {title} </label>
      </div>
      );
};

export default Card;