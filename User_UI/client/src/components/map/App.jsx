import React, { Component } from "react";

import Map from "./Map.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // MOUNT MAP
  componentDidMount() {}
  render() {
    return (
      <div>
        <Map />
      </div>
    );
  }
}

export default App;
