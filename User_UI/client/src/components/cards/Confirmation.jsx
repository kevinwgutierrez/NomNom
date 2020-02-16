import React from 'react';

function Confirmation(props) {
  return (
    <div id="confirmation-wrapper">
      <div id="confirmation-header">
        <h1>Thank you for your order!</h1>
      </div>
      <div id="confirmation-details">
        <h2>Order details:</h2>
        <div>
          <h3>Meal: {props.selectedMeal.name} x {props.quantity}</h3>
          <h4>{props.selectedMeal.resName}</h4>
          <h5>{props.selectedMeal.resAddress}</h5>
          <h4>Total: ${(props.selectedMeal.price * props.quantity).toFixed(2)}</h4>
          <h4>YumYum points earned: {props.selectedMeal.YUMYUM * props.quantity}</h4>
          <h4>Turtles saved: 4</h4>
          <h4>Seagulls cleaned: 6</h4>
        </div>
      </div>
    </div>
  )
}

export default Confirmation;