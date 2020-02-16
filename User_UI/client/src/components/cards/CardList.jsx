import React, { Component } from "react";
import Card from './Card.jsx';
import '../../../styles/styles.css';

function CardList(props) {
  return (
    <div className="card-list-container">
      <div className="card-list-header">
      </div>
      <div className="card-list">
        {props.meals.map(meal => {
          return <Card meal={meal} key={meal.name} toggleModal={props.toggleModal} />;
        })}
      </div>
    </div>
  );
}

export default CardList;