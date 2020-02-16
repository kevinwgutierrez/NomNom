import React from 'react';
import Orders from './Orders.jsx';
import key from '../../../config.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        map : {},
        orderQueue: []
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
    axios.get('/driver')
      .then((response) => {
        const orders = response.data;
        this.setState({
          orderQueue: orders
        })
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
        var bounds = new tt.LngLatBounds();
        geojson.features[0].geometry.coordinates.forEach(function(point) {
            bounds.extend(tt.LngLat.convert(point));
        });
        this.state.map.fitBounds(bounds, { duration: 0, padding: 50 });
      })
  }

  render () {
    return (
        <div id="main">
          <button id="nextOrders" onClick={() => this.calculateRoute('-122.396509,37.787322:-122.402202,37.790343')}>Get Next Route</button>
          <Orders orders={this.state.orderQueue}/>
        </div>
    )
  }
}

export default App;