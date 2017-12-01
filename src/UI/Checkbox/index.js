import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid;
  cursor: pointer;
  border-color: ${props =>
    props.checked ? "#008489" : "rgba(72, 72, 72, 0.3)"};
  background: ${props => (props.checked ? "#008489" : "white")};
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  & svg {
    position: absolute;
    left: 3px;
    top: 6px;
    fill: ${props => (props.checked ? "white;" : "none")};
  }
`;

class Checkbox extends React.Component {
  state = {
    isChecked: this.props.value
  };
  handleClick = () => {
    this.setState(
      {
        isChecked: !this.state.isChecked
      },
      () => {
        this.props.onChange(
          this.state.isChecked,
          this.props.resource,
          this.props.index
        );
      }
    );
  };
  render() {
    return (
      <Box
        checked={this.state.isChecked}
        onClick={this.handleClick}
        id={this.props.forId}
      >
        <svg width="17" height="12" viewBox="-1 0 17 12">
          <path d="M4.76945453,8.48551941 L5.4446,9.41039 L3.82921,10.58961 L4.6369,10 L5.32989,10.72095 C5.12176,10.92101 4.83731,11.0214 4.54972,10.99619 C4.26212,10.97102 3.99943,10.82278 3.82921,10.58961 L0.192309,5.60746 L1.807692,4.42825 L4.76945453,8.48551941 L13.307,0.279053 L14.693,1.720948 L5.32989,10.72095 L3.94391,9.27905 L4.76945453,8.48551941 L4.76945453,8.48551941 Z M1.807692,4.42825 L0.192309,5.60746 C-0.13332,5.16139 -0.03568,4.5358 0.410395,4.21017 C0.856471,3.88454 1.482062,3.98218 1.807692,4.42825 Z M14.693,1.720948 L13.307,0.279053 C13.7052,-0.10367 14.3382,-0.09116 14.7209,0.307011 C15.1037,0.705179 15.0912,1.338221 14.693,1.720948 Z" />
        </svg>
      </Box>
    );
  }
}
export default Checkbox;
