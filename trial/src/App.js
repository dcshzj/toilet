import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import L from 'leaflet';
import Location, { AllToilets } from './components/AllToilets';
import allToilets from './data.json';

var myIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});





class App extends Component {
  state = {
     toiletList: allToilets,

    location: {
      lat: 1.2968324167154038,
      lng: 103.77325530260782,
    },
    zoom: 15.6,
    hasUserLocation: false,
    newLocation:{
        lat:null,
        lng:null,
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        hasUserLocation:true,
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

      })
    });
  }



  // Store toilets in a binary heap data structure, have attribute to hold review and ratings
  // Script to process ratings
  // Build a slide navigation menu
    // Nav menu should have options to rank the toilets
    // Each toilet can be pressed, expand to show more details
  // Implement routing
  // Nearest toilets

  render(){
    const position = [this.state.location.lat, this.state.location.lng];

    return (
      <div class="app-container">
        <div class="app-sidebar app-sidebar-topbar">
          <div class="app-sidebar-logo">
            NUS Toilet Party
          </div>
        </div>
        <div class="app-sidebar-toilets">
            List of toilets goes here
        </div>
          <Map className="app-map" center={position} zoom={this.state.zoom} onClick={this.setLocation}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {
              this.state.hasUserLocation ?
              <Marker position={position} icon={myIcon}>
                <Popup>
                  Your current location
                </Popup>
              </Marker> : ''
            })
            },
            {
                <AllToilets toiletList={this.state.toiletList}/>
            }

          </Map>
      </div>
    );

  }
}

export default App;
