import React from 'react';
import Meal from './meal.jsx';

function Meals(props) {
  return(
    <div className="meals-wrapper"> Available Meals
      {props.meals.map((meal, i) => <Meal meal={meal} key={i} toggleMeal={props.toggleMeal}/>)}
    </div>
  );
}

export default Meals;