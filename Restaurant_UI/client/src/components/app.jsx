import React from 'react';
import axios from 'axios';
import Statistics from './statistics.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: {},
      transHist: {},
      meals: {},
      activeMeals: {}
    }

    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    axios.get('/restaurant')
      .then((response) => {
        let data = response.data;
        this.setState({
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
      <div id="main">
        <div className="stats-container">
          <Statistics stats={this.state.stats}/>
        </div>
        <div className="trans-history-container">

        </div>
        <div className="restaurant-meals-container">

        </div>
        <div className="active-meals-container">

        </div>
      </div>
    )
  }
}

export default App;