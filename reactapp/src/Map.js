import React, { Component } from "react";
import mapboxgl from 'mapbox-gl';

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1Ijoicmlub3NldG91IiwiYSI6ImNsMG95YmJyOTFzZzIzZHVvMG5penk2bW0ifQ.5r0bG9AOJ0SAm1YCRE6FAg"
    
    this.map = new mapboxgl.Map({
      container:  this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.3056504, 59.9429126],
      zoom: 10
    })
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render () {
    return <div className="map-wrapper">
      <div data-testid="map" className="map" ref={this.mapContainer} />
      </div>
  }
}
