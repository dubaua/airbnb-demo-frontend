import React from "react";
import styled from "styled-components";
import badge from "./badge.svg";

export const Wrapper = styled.div`
  position: relative;
  line-height: 0;
  & img {
    max-width: 100%;
    height: auto;
  }
`;

export const Badge = styled.div`
  background: url(${badge}) center center no-repeat;
  width: 16px;
  height: 30px;
  position: absolute;
  right: -3px;
  bottom: -2px;
`;

class Cropped extends React.Component {
  render() {
    return (
      <Wrapper>
        <img src={this.props.src} alt={this.props.alt} />
        {this.props.badge && <Badge />}
      </Wrapper>
    );
  }
}
export default Cropped;
