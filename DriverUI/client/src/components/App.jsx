import React from 'react';
import Orders from './Orders.jsx';
import key from '../../../config.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        map : {},
        orderQueue: [],
        current: null,
        markers: [],
        counter: 0,
    }
    this.calculateRoute = this.calculateRoute.bind(this);
    this.addMarkers = this.addMarkers.bind(this);
    this.resetMarkers = this.resetMarkers.bind(this);
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
          orderQueue: orders,
          current: orders[0]
        })
      })
  }

  addMarkers (coordinates) {
    let markers = [];
    coordinates.forEach(item => {
      markers.push(new tt.Marker().setLngLat([item[1], item[0]]).addTo(this.state.map));
    })
    this.setState({
      markers : markers
    })
  }

  resetMarkers () {
    this.state.markers.forEach(marker => {
      marker.remove();
    })
    this.setState({
      markers: []
    })
  }

  calculateRoute (coordinates) {
    this.resetMarkers();
    if (this.state.map.getLayer('route')) {
      this.state.map.removeLayer('route');
      this.state.map.removeSource('route');
    }

    this.addMarkers([this.state.current.userLocation, this.state.current.resLocation]);

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
      let newCounter = this.state.counter += 1;
      this.setState({
        counter: newCounter,
        current: this.state.orderQueue[newCounter],
      })
  }

  render () {
    return (
      <div id="main">
        <button id="nextOrders" onClick={() => {
          this.calculateRoute(this.state.current.route)
        }}>Get Next Route</button>
        <Orders orders={this.state.orderQueue}/>
      </div>
    )
  }
}

export default App;