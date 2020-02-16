import React, { Component } from "react";
import '../../../styles/styles.css';

function Card(props) {
  return (
    <div className="card-container">
      <div>
        <img src={props.meal.picture}/>
      </div>
      <div className="row">
        <div className="price">
          ${props.meal.price}
        </div>
        <div className="mealName">
          <h5>{props.meal.name}</h5>
        </div>
        <div className="quantityRemaining">
          {props.meal.quantity} left
        </div>
      </div>

      <button onClick={() => props.toggleModal(props.meal)}>Order</button>
    </div>
  )
}

export default Card;