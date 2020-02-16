import React, { Component } from "react";
import Card from './Card.jsx';

function CardList(props) {
  return (
    <div id="card-list-container">
      <div id="card-list-header">
        <h2>Yummy food items</h2>
      </div>
      <div id="card-list">
        {props.meals.map(meal => {
          return <Card meal={meal} key={meal.name} toggleModal={props.toggleModal} />;
        })}
      </div>
    </div>
  );
}

export default CardList;