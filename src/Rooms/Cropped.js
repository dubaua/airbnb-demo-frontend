import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border: 0;
  color: #0f7276;
  cursor: pointer;
  font: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
`;

class Cropped extends React.Component {
  static defaultProps = {
    limit: 300,
    label: "Read more"
  };

  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const content = this.props.children;
    const cropped = content.substring(0, this.props.limit) + "…";
    return (
      <div>
        {content.length >= this.props.limit
          ? this.state.isOpen ? content : cropped
          : content}
        {content.length >= this.props.limit && (
          <Button onClick={this.handleClick}>
            {this.state.isOpen ? "Hide" : this.props.label}
          </Button>
        )}
      </div>
    );
  }
}
export default Cropped;
