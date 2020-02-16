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
          <h4>Total: ${props.selectedMeal.price * props.quantity}</h4>
        </div>
      </div>
    </div>
  )
}

export default Confirmation;