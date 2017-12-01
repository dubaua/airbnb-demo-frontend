import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  background: white;
  border-radius: 50%;
  border: 1px solid;
  box-sizing: border-box;
  color: #008489;
  cursor: pointer;
  font-size: 0;
  height: 32px;
  margin: 0;
  padding: 0;
  position: relative;
  width: 32px;
  &:before {
    background: #008489;
    content: "";
    height: 2px;
    left: 10px;
    position: absolute;
    top: 14px;
    width: 10px;
  }
  &:after {
    background: ${props => (props.increment ? "#008489;" : "none")};
    content: "";
    height: 10px;
    left: 14px;
    position: absolute;
    top: 10px;
    width: 2px;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.67;
  }
`;
const Count = styled.div`
  width: 50px;
  text-align: center;
  font-size: 18px;
`;

class Counter extends React.Component {
  state = {
    value: this.props.value
  };

  decrement = () => {
    if (this.state.value - 1 >= this.props.min) this.change(-1);
  };

  increment = () => {
    if (this.state.value + 1 <= this.props.max) this.change(1);
  };

  change = mod => {
    this.setState(
      {
        value: this.state.value + mod
      },
      () => {
        this.props.onChange(
          this.state.value,
          this.props.resource,
          this.props._key
        );
      }
    );
  };
  render() {
    return (
      <Wrapper>
        <Button
          onClick={this.decrement}
          disabled={this.state.value <= this.props.min}
          decrement
        >
          -
        </Button>
        <Count>{this.state.value}</Count>
        <Button
          onClick={this.increment}
          disabled={this.state.value >= this.props.max}
          increment
        >
          +
        </Button>
      </Wrapper>
    );
  }
}
export default Counter;
