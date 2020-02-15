import React, { Component } from "react";
import Card from './Card.jsx';

function CardList(props) {
  return (
    <div>
      <div><h2>Yummy food items</h2></div>
      <div>
        {props.meals.map(meal => {
          return <Card meal={meal} key={meal.name} />;
        })}
      </div>
    </div>
  );
}

export default CardList;