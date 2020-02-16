import React from 'react';
import Meal from './meal.jsx';

function ActiveMeal(props) {
  return(
    <div className="active-meal-wrapper"> Active Meals
      {props.activeMeals.map((meal, i) => <Meal meal={meal} key={i} toggleMeal={props.toggleMeal}/>)}
    </div>
  );
}

export default ActiveMeal;