import React from "react";
import styled from "styled-components";
import Stars from "./Stars";

const Wrapper = styled.div``;
const Price = styled.div`
  align-items: baseline;
  display: flex;
  font-size: 12px;
  font-weight: normal;
  margin-bottom: 8px;
  & strong {
    display: inline-block;
    font-size: 24px;
    margin-right: 4px;
  }
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;
const Limiter = styled.div`
  width: 80px;
  margin-right: 8px;
`;

class Highlight extends React.Component {
  render() {
    return (
      <Wrapper>
        <Price>
          <strong>$41</strong>
          per night
        </Price>
        <Rating>
          <Limiter>
            <Stars />
          </Limiter>
          111
        </Rating>
      </Wrapper>
    );
  }
}
export default Highlight;
