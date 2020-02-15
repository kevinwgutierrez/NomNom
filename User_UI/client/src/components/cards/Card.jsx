import React, { Component } from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="mealName">
        <h3>{props.meal.name}</h3>
      </div>
      <div className="price">
        ${props.meal.price}
      </div>
      <div className="quantityRemaining">
        {props.meal.quantity} Remaining
      </div>
    </div>
  )
}

export default Card;