import React from 'react';
import Meal from './meal.jsx';

function Meals(props) {
  console.log(props.meals);
  return(
    <div className="meals-wrapper">
      {props.meals.map((meal, i) => <Meal meal={meal} key={i}/>)}
    </div>
  );
}

export default Meals;