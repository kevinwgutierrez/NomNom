import React, { Component } from "react";
import ProximitySearch from "./ProximitySearch.jsx";
import apiKey from "../config.js";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {},
      searchResults: "",
      location: "",
      markers: []
    };
    this.ifDefined = this.ifDefined.bind(this);
    this.renderMarker = this.renderMarker.bind(this);
    this.searchProximity = this.searchProximity.bind(this);
    this.handleProxSearch = this.handleProxSearch.bind(this);
  }

  // MOUNT MAP
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(location => {
      if (location) {
        this.setState({
          location: location
        });
      }
    });
    tt.setProductInfo("devweek2020", "1.0");
    const map = tt.map({
      key: apiKey,
      container: "map",
      style: "tomtom://vector/1/basic-main",
      center: { lng: -122.3964, lat: 37.7865 },
      zoom: 13.5
    });
    map.addControl(
      new tt.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );
    let searchBox = new tt.plugins.SearchBox({
      idleTimePress: 200,
      minNumberOfCharacters: 3,
      searchOptions: {
        language: "en-GB"
      },
      units: "metric",

      noResultsMessage: "No results found."
    });
    map.addControl(searchBox);
    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());

    map.on("load", () => {
      moveMapToSf();
    });

    // MOVE MAP FUNCTION
    function moveMapToSf() {
      map.flyTo({ center: { lng: -122.3964, lat: 37.7877 }, zoom: 14.5 });
    }

    // SET MAP STATE
    this.setState({
      map: map
    });
  }
  // CHECK IF DEFINED FOR POPUP
  ifDefined(tmp) {
    return tmp != undefined ? tmp : "";
  }
  // POPUP GENERATOR
  createPopupContent(result) {
    return (
      "<strong>" +
      result.poi.name +
      "</strong><br>" +
      this.ifDefined(result.address.streetNumber) +
      " " +
      this.ifDefined(result.address.streetName) +
      " " +
      result.address.municipality +
      "<br>" +
      (result.poi.phone != undefined
        ? "Phone:" + result.poi.phone + "<br>"
        : "") +
      (result.poi.url != undefined
        ? '<a href="http://' +
          result.poi.url +
          '" target="_blank">Website</a><br>'
        : "")
    );
  }
  //SEARCH HANDLER
  handleProxSearch(distance) {
    let coordinates = {
      latitude: 37.7877,
      longitude: -122.3962
    };
    this.searchProximity(coordinates, distance);
  }

  //PROXIMITY SEARCH
  searchProximity(startLocation, proximity) {
    let radiusConversion;
    if (proximity === 1) {
      radiusConversion = 1609;
    } else if (proximity === 5) {
      radiusConversion = 8046;
    } else if (proximity === 10) {
      radiusConversion = 16093;
    }
    tt.services
      .nearbySearch({
        key: apiKey,
        center: startLocation,
        radius: radiusConversion,
        query: "restaurants"
      })
      .go()
      .then(results => {
        this.renderMarker(results);
      });
  }

  // RENDER MARKER
  renderMarker(data) {
    let deletedMarkers = this.state.markers;
    deletedMarkers.forEach(marker => {
      this.state.map.marker.remove();
    });

    data.results.forEach(result => {
      let popupData = {
        address: {
          streetName: result.address.streetName,
          streetNumber: result.address.streetNumber,
          municipality: result.address.municipality
        },
        poi: {
          name: result.poi.name,
          phone: result.poi.phone,
          url: result.poi.url
        }
      };
      var popup = new tt.Popup({ offset: 30 }).setHTML(
        this.createPopupContent(popupData)
      );
      let markerHolder = [];
      markerHolder.push(
        new tt.Marker()
          .setLngLat(result.position)
          .setPopup(popup)
          .addTo(this.state.map)
      );
      this.setState({
        markers: markerHolder
      });
      console.log(this.state.markers[0]._lngLat);
    });
  }

  render() {
    return (
      <div>
        <ProximitySearch handleProxSearch={this.handleProxSearch} />
      </div>
    );
  }
}

export default Map;
