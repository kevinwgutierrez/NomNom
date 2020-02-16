import React, { Component } from "react";

function Card(props) {
  return (
    <div className="card" >
      <div className="meal-name">
        <h2>{props.meal.name}</h2>
      </div>
      <div className="restaurant-name">
        <h3>{props.meal.resName}</h3>
      </div>
      <div className="restaurant-address">
        <h3>{props.meal.resAddress}</h3>
      </div>
      <div className="price">
        ${props.meal.price.toFixed(2)}
      </div>
      <div className="quantity-remaining">
        {props.meal.quantity} Remaining
      </div>
      <div className="yum-points">
        YumYum points: {props.meal.YUMYUM}
      </div>
      <button onClick={() => props.toggleModal(props.meal)}>Order</button>
    </div>
  )
}

export default Card;