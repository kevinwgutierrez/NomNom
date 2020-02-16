import React, { Component } from "react";
import CardList from './cards/CardList.jsx';
import CheckoutModal from './cards/CheckoutModal.jsx';
import Confirmation from './cards/Confirmation.jsx';

import sampleRestaurantData from '../sampleRestaurantData.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: [],
      isModalOpen: false,
      orderConfirmed: false,
      selectedMeal: {},
      quantity: 1,
      restaurants: []
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleConfirmation = this.toggleConfirmation.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.getMeals();
  }

  getMeals() {
    let restaurantData = sampleRestaurantData.restaurantData;
    let restaurants = this.state.restaurants;
    let meals = this.state.meals;
    restaurantData.forEach(restaurant => {
      restaurant.resMeals.forEach(meal => {
        if (meal.active) {
          console.log(meal);
          meals.push(meal);
        }
      });
    });
    this.setState({
      meals: meals
    });
  }

  toggleModal(meal) {
    if (!this.state.isModalOpen) {
      this.setState({
        isModalOpen: true,
        selectedMeal: meal,
      });
    } else {
      this.setState({
        isModalOpen: false
      });
    }
  }

  toggleConfirmation() {
    if (!this.state.orderConfirmed) {
      this.setState({
        orderConfirmed: true
      });
    } else {
      this.setState({
        orderConfirmed: false
      });
    }
  }

  submitForm(value) {
    console.log(value);
    this.setState({
      quantity: value
    })
    this.toggleModal();
    this.toggleConfirmation();
  }

  render() {
    const { meals, isModalOpen, orderConfirmed, selectedMeal, quantity } = this.state;
    return (
      <div id="app-container">
        {orderConfirmed ?
          <Confirmation selectedMeal={selectedMeal} quantity={quantity} />
          :
          <div id="food-container">
            <CardList meals={meals} toggleModal={this.toggleModal} />
            {isModalOpen ?
              <CheckoutModal
                toggleModal={this.toggleModal}
                isModalOpen={isModalOpen}
                toggleConfirmation={this.toggleConfirmation}
                orderConfirmed={orderConfirmed}
                submitForm={this.submitForm}
                >
              </CheckoutModal>
              : null}
          </div>
        }
      </div>
    )
  }
}

export default App;
