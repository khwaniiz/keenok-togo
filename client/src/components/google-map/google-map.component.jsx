import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import * as sc from './google-map.styles';

export class GoogleMapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{ lat: 41.928553, lng: -87.707518 }],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          styposition={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log('You clicked me!')}
        />
      );
    });
  };

  render() {
    const mapStyles = {
      width: '350px',
      height: '350px',

      position: 'relative',
    };
    return (
      <sc.GoogleMapContainer>
        <div style={mapStyles}>
          <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{ lat: 41.928553, lng: -87.707518 }}
          >
            {this.displayMarkers()}
          </Map>
        </div>
      </sc.GoogleMapContainer>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(GoogleMapContainer);
