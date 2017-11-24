import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Icon = styled.div`
  width: 16.67%;
  margin: 0 1.66%;
  line-height: 0;
`;

const Star = () => {
  return (
    <Icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        role="presentation"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="#008489"
          d="M12 4.5c.1.4 0 .6-.3.8L8.8 7.5 9.9 11c.1.5-.2.9-.7.9-.1.1-.2.1-.4 0L6 9.7l-2.8 2.2c-.3.2-.7.2-1-.2-.2-.2-.2-.4-.1-.6l1.1-3.5L.3 5.4c-.3-.3-.4-.5-.3-.9.1-.3.4-.5.7-.5h3.5L5.3.5c.1-.3.4-.5.7-.5.3 0 .6.2.7.5L7.8 4h3.5c.3 0 .6.2.7.5z"
        />
      </svg>
    </Icon>
  );
};

class Stars extends React.Component {
  render() {
    return (
      <Wrapper>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </Wrapper>
    );
  }
}
export default Stars;
