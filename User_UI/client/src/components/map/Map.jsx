import React, { Component } from "react";
import map from "./map.js";
class Map extends Component {
  contructor(props) {
    this.state = {
      map: {}
    };
  }
  render() {
    return <div>Map goes here</div>;
  }
}

export default Map;
