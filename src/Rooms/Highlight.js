import React from "react";
import styled from "styled-components";
import highlight from "./highlight.png";

const Wrapper = styled.div`
  background: url(${highlight}) no-repeat;
  background-position: right 12px center;
  box-sizing: border-box;
  margin: 24px 0;
  padding-right: 48px;

  @media only screen and (min-width: 768px) {
    background-position: right 32px center;
    border: 1px solid rgba(118, 118, 118, 0.2);
    padding: 16px 64px 16px 24px;
  }

  @media only screen and (min-width: 992px) {
    background-position: right center;
    border: 0;
    padding: 0 48px 0 0;
  }

  & p {
    margin: 4px 0;
  }
  & strong {
    font-weight: bolder;
  }
`;

class Highlight extends React.Component {
  render() {
    return (
      <Wrapper>
        <p>
          <strong>This home is on people’s minds.</strong>
        </p>
        <p>It’s been viewed 500+ times in the past week.</p>
      </Wrapper>
    );
  }
}
export default Highlight;
