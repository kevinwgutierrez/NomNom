import React, { Component } from "react";
import CardList from './cards/CardList.jsx';

import sampleRestaurantData from '../sampleRestaurantData.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: [],
    };

    this.getMeals();
  }

  getMeals() {
    let restaurantData = sampleRestaurantData.restaurantData;
    restaurantData.forEach(restaurant => {
      restaurant.resMeals.forEach(meal => {
        if (meal.active) {
          console.log(meal);
          this.state.meals.push(meal);
        }
      });
    });
  }

  render() {
    const { meals } = this.state;
    return (
    <div>
      <CardList meals={meals} />
    </div>
    )
  }
}

export default App;
