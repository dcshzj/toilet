import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


var myIcon = L.icon({
    iconUrl: 'https://image.flaticon.com/icons/svg/13/13316.svg',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

export class Toilet extends Component{


    render(){
        const {name, location, floors} = this.props.loc;
        const position = location;
        let output = [];
        output.push("Name: " + name);

        if (floors.Female != null) {
            output.push("Female: " + floors.Female.join(", "));
        }

        if (floors.Male != null) {
            output.push("Male: " + floors.Male.join(", "));
        }

        if (floors.Handicap != null) {
            output.push("Handicap: " + floors.Handicap.join(", "));
        }

        if (floors.Toilet != null) {
            output.push("Toilet: " + floors.Toilet.join(", "));
        }

        if (floors.Staff != null) {
            output.push("Staff: " + floors.Staff.join(", "));
        }

        let result = output.flatMap((value, index, array) => {
            if (array.length -1 !== index) {
                return [value, <br />];
            } else {
                return value;
            }
        });


        return(
            <Marker position={position} icon={myIcon}>
                <Popup>
                    {result}
                </Popup>
            </Marker>

        )
    }

}


export default Toilet;

