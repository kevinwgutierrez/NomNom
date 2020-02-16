import React from 'react';
import Queue from './queue.jsx';
import key from '../../../config.js';
import sampleData from './orders.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        map : {},
        restaurantQueue: [],
        orderQueue: sampleData,
    }
    this.calculateRoute = this.calculateRoute.bind(this);
    this.addMarkers = this.addMarkers.bind(this);
  }

  componentDidMount () {
    tt.setProductInfo('com.company-name.product-name', '3.0');
    const map = tt.map({
        key: `${key}`,
        container: 'map',
        style: 'tomtom://vector/1/basic-main',
        center: [-122.396525, 37.787415],
        zoom: 13
    });
    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());
    this.setState({
      map: map
    })
  }

  addMarkers (coordinates) {
    new tt.Marker().setLngLat([coordinates[0], coordinates[1]]).addTo(this.state.map);
  }

  calculateRoute (coordinates) {
    tt.services.calculateRoute({
      key: `${key}`,
      traffic: false,
      locations: `${coordinates}`
    })
      .go()
      .then((response) => {
        const geojson = response.toGeoJson();
        this.state.map.addLayer({
          'id': 'route',
          'type': 'line',
          'source': {
              'type': 'geojson',
              'data': geojson
          },
          'paint': {
              'line-color': '#4a90e2',
              'line-width': 8
          }
        })
      })
  }

  render () {
    return (
        <div id="main">
          {this.state.orderQueue.map((order, i) => (
            <Queue key={i} order={order} setNext={this.addMarkers}/>
          ))}
          <button onClick={this.calculateRoute('4.8,52.3:4.87,52.37')}>Get Next Route</button>
        </div>
    )
  }
}

export default App;