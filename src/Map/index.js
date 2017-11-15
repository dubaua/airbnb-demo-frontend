import React from "react";
import { Wrapper, Sticky } from "./styled";
import GoogleMapReact from "google-map-react";

class Map extends React.Component {
  render() {
    return (
      <Wrapper>
        <Sticky>
          <GoogleMapReact
            defaultCenter={{ lat: 59.95, lng: 30.33 }}
            defaultZoom={11}
          />
        </Sticky>
      </Wrapper>
    );
  }
}
export default Map;
