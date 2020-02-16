import React from 'react';

function Meal(props) {
  return(
    <div className="meal-wrapper">
      <div className="meal-name">
        Name: {props.meal.name}
      </div>
      <div className="meal-price">
        Price: {props.meal.price}
      </div>
      <div className="meal-quantity">
        Quantity: {props.meal.quantity}
      </div>
      <div className="meal-activity">
        Active? {props.meal.active ? 'Yes' : 'No'}
      </div>
    </div>
  );
}

export default Meal;