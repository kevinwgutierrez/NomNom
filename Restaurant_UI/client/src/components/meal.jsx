import React from 'react';

function Meal(props) {
  return(
    <div className="meal-wrapper" onClick={() => props.toggleMeal(props.meal)}>
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
        {props.meal.active ? 'Active' : 'Not Active'}
      </div>
    </div>
  );
}

export default Meal;