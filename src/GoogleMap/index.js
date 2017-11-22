import React from "react";
import { Wrapper } from "./styled";
import GoogleMapReact from "google-map-react";

class GoogleMap extends React.Component {
  render() {
    return (
      <Wrapper>
        <GoogleMapReact
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={11}
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        />
      </Wrapper>
    );
  }
}
export default GoogleMap;
