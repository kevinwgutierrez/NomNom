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
  }

  fetch() {
    axios.get('/restaurant')
      .then((response) => {
        let data = response.data;
        this.setState({
            data: data,
            stats: data.resStats,
            transHist: data.transHist,
            meals: data.resMeals
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
          <Meals meals={this.state.meals}/>
        </div>
        <button>Add Meal</button>
        <div className="active-meals-container">
          <ActiveMeals activeMeals={this.state.activeMeals}/>
        </div>
      </div>
    )
  }
}

export default App;