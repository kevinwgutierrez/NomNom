import React from 'react';
import axios from 'axios';
import Statistics from './statistics.jsx';
import TransHist from './transHist.jsx';
import Meals from './meals.jsx';
import ActiveMeals from './activeMeals.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      stats: {},
      transHist: [],
      meals: [],
      activeMeals: []
    }

    this.fetch = this.fetch.bind(this);
    this.toggleMeal = this.toggleMeal.bind(this);
  }

  fetch() {
    axios.get('/restaurant')
      .then((response) => {
        let data = response.data;
        let meals = [];
        let activeMeals = [];

        for(let i = 0; i < data.resMeals.length; i++) {
          if(data.resMeals[i].active) {
            activeMeals.push(data[i]);
          } else {
            meals.push(data.resMeals[i]);
          }
        }

        this.setState({
            data: data,
            stats: data.resStats,
            transHist: data.transHist,
            meals: meals,
            activeMeals: activeMeals
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  patch() {

  }

  toggleMeal(meal, index) {
    if(meal.active === false) {
      meal.active = true;
      //patch request

      let currActiveMeal = this.state.activeMeals
      currActiveMeal.push(meal);
      this.setState({
        activeMeals: currActiveMeal
      });
    } else {
      meal.active = false;
      //patch request
      // let index = this.state.activeMeals.indexOf(meal);
      let currDeactiveMeal = this.state.activeMeals;
      currDeactiveMeal.pop();
      this.setState({
        activeMeals: currDeactiveMeal
      });
    }
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <div id="restaurant-main">
        <h1 className="restaurant-name">
          {this.state.data.resName}
        </h1>
        
        <div className="stats-container">
          <Statistics stats={this.state.stats}/>
        </div>
        <div className="trans-history-container">
          <TransHist transHist={this.state.transHist}/>
        </div>
        <div className="restaurant-meals-container">
          <Meals meals={this.state.meals} toggleMeal={this.toggleMeal}/>
        </div>
        <div className="active-meals-container">
          <ActiveMeals activeMeals={this.state.activeMeals}/>
        </div>
      </div>
    )
  }
}

export default App;