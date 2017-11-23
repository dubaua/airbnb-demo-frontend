import React from "react";
import styled from "styled-components";
import star from "./star.svg";

export const Wrapper = styled.div`
  display: flex;
  width: 70px;
  line-height: 0;
`;

export const Star = styled.img`
  width: 16.67%;
  height: auto;
  margin: 0 1.66%;
`;

class Stars extends React.Component {
  render() {
    const size = this.props.size;
    return (
      <Wrapper>
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
      </Wrapper>
    );
  }
}
export default Stars;
