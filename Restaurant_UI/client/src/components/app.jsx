import React from 'react';
import axios from 'axios';
import Stats from './stats.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null
    }

    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    axios.get('/restaurant')
      .then((response) => {
        console.log(response);
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
          <Stats />
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