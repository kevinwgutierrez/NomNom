import React, { Component } from "react";
import CardList from './cards/CardList.jsx';
import CheckoutModal from './cards/CheckoutModal.jsx';
import Confirmation from './cards/Confirmation.jsx';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: [],
      isModalOpen: false,
      orderConfirmed: false,
      selectedMeal: {},
      quantity: 1,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleConfirmation = this.toggleConfirmation.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.getMeals();
  }

  getMeals() {
    let meals = this.state.meals;
    axios.get('/user')
      .then((data) => {
        let restaurantData = data.data;
        restaurantData.forEach(restaurant => {
          restaurant.resMeals.forEach(meal => {
            if (meal.active) {
              meals.push(meal);
            }
          });
        });
        this.setState({
          meals: meals
        });
      })
      .catch((err) => {
        console.log('error');
      });
  }

  postOrder() {
    const { selectedMeal, quantity } = this.state;
    const { resName, resAddress, resLocation, name, price } = selectedMeal;
    axios.post('/user', {
      orderId: 5,
      orderUser: 'Zack',
      orderUserAddress: '501 Liberty St, San Francisco CA 94114',
      userLocation: [37.777884, -122.454502],
      orderUserContact: {email: 'zack@tomtom.com', phone: '650-555-8080'},
      orderRestaurant: resName,
      orderRestaurantAddress: resAddress,
      resLocation: [37.784735, -122.400134],
      order: [{meal: name, quantity: quantity, price: price}],
      route: '-122.400133,37.784736:-122.454501,37.777885',
    })
      .then(()=> {
        console.log("Order received!")
      })
      .catch((err) => {
        console.log('error')
      })
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
    });
    this.postOrder();
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
