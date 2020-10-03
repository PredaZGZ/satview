import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker } from "react-leaflet";

import userLocationURL from "../resources/satellite.svg";

const sat = L.icon({
  iconUrl: userLocationURL,
  iconSize: [30, 30],
});

export default class SatMap extends Component {
  center = {
    lat: 0,
    lng: 0,
  };
  zoom = 2;
  sats = [];
  render() {
    return (
      <div className="map">
        <Map
          className="map"
          worldCopyJump={true}
          center={[this.center.lat, this.center.lng]}
          zoom={this.zoom}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors and Chat location by Iconika from the Noun Project'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {<Marker position={[41.647161, -0.8749607]} icon={sat}></Marker>}{" "}
        </Map>{" "}
      </div>
    );
  }
}
