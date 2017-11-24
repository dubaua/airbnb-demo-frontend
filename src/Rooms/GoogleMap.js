import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const Wrapper = styled.div`
  height: 192px;
  @media only screen and (min-width: 768px) {
    height: 474px;
  }
  @media only screen and (min-width: 992px) {
    height: 612px;
  }
`;

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
