import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import  Toilet from './Toilet';
import PropTypes from 'prop-types';


  

export class AllToilets extends Component{
    render(){
        return this.props.toiletList.map((loc) => (
            <Toilet key={loc.id} loc={loc}/>
        ));
    }
}
AllToilets.propTypes = {
    toiletList: PropTypes.array.isRequired
}

export default AllToilets;