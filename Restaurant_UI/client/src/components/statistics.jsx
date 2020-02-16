import React from 'react';

function Statistics(props) {
  console.log(props.stats);
  return(
    <div className="stats-wrapper">
      <div className="totalmeals-wrapper">
        Total Meals: {props.stats.totalMeals}
      </div>
      <div className="revenue-wrapper">
        Revenue: ${props.stats.totalMeals}
      </div>
      <div className="turtles-wrapper">
        TURTLES SAVED: {props.stats.turtles}
      </div>
      <div className="yumyum-wrapper">
        YUM-YUM POINTS: {props.stats.YUMYUM}
      </div>
    </div>
  );
}

export default Statistics;