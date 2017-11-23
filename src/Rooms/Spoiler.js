import React from "react";
import styled from "styled-components";
import arrowDown from "./arrow-down.svg";

export const Button = styled.button`
  padding: 0;
  margin: 0;
  border: 0;
  font-size: 16px;
  font-family: inherit;
  line-height: normal;
  color: #0f7276;
  cursor: pointer;
  background: transparent;
  &:hover {
    text-decoration: underline;
  }
`;

export const Arrow = styled.i`
  width: 11px;
  height: 6px;
  display: inline-block;
  margin-left: 8px;
  background: url(${arrowDown});
  transform: ${props => (props.active ? "rotate(180deg)" : null)};
  margin-bottom: ${props => (props.active ? "2px" : null)};
`;

class Spoiler extends React.Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        {this.state.isOpen && this.props.children}
        <Button onClick={this.handleClick} active={this.state.isOpen}>
          {this.state.isOpen ? "Hide" : this.props.label}
          <Arrow active={this.state.isOpen} />
        </Button>
      </div>
    );
  }
}
export default Spoiler;
