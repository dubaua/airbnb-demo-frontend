import React from "react";
import styled from "styled-components";

const Box = styled.button`
  width: 64px;
  height: 40px;
  border: 1px solid;
  cursor: pointer;
  border-color: ${props =>
    props.checked ? "#008489" : "rgba(72, 72, 72, 0.3)"};
  background: ${props =>
    props.checked ? "#008489" : "rgba(72, 72, 72, 0.08);"};
  box-sizing: border-box;
  border-radius: 20px;
  position: relative;
  transition: all 0.33s ease-in-out;
`;

const Slider = styled.div`
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${props =>
    props.checked ? "#008489" : " rgba(72, 72, 72, 0.3)"};
  box-sizing: border-box;
  height: 40px;
  left: ${props => (props.checked ? "23px" : "-1px")};
  position: absolute;
  top: -1px;
  width: 40px;
  transition: inherit;
  & .cross {
    position: absolute;
    top: 12px;
    left: 12px;
    fill: #484848;
    transition: inherit;
    opacity: ${props => (props.checked ? "0" : "1")};
    transform: ${props => (props.checked ? "rotate(90deg)" : "none")};
  }
  & .check {
    position: absolute;
    top: 10px;
    left: 10px;
    fill: #008489;
    transition: inherit;
    opacity: ${props => (props.checked ? "1" : "0")};
    transform: ${props => (props.checked ? "none" : "rotate(-90deg)")};
  }
`;

class SlideToggle extends React.Component {
  handleClick = () => {
    this.props.onChange(
      !this.props.value,
      this.props.resource,
      this.props._key
    );
  };

  render() {
    return (
      <Box
        checked={this.props.value}
        id={this.props.forId}
        onClick={this.handleClick}
      >
        <Slider checked={this.props.value}>
          <svg
            className="cross"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
          >
            <path d="M7 5.23223305L3.28219434 1.5144274c-.4883107-.4883107-1.27411653-.48266032-1.7622719.00549505-.4915587.4915587-.49061558 1.27715136-.00549505 1.7622719L5.23223303 7 1.5144274 10.7178057c-.4883107.4883107-.48266032 1.2741165.00549505 1.7622719.4915587.4915586 1.27715136.4906155 1.7622719.005495L7 8.76776695l3.7178057 3.71780565c.4883107.4883107 1.2741165.4826603 1.7622719-.005495.4915586-.4915587.4906155-1.2771514.005495-1.7622719L8.76776695 7l3.71780565-3.71780566c.4883107-.4883107.4826603-1.27411653-.005495-1.7622719-.4915587-.4915587-1.2771514-.49061558-1.7622719-.00549505L7 5.23223303z" />
          </svg>
          <svg
            className="check"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path d="M3.80052238 8.56390734l3.14071078 4.14306786 9.44502924-8.74248786s1.137343-.94919254 2.0969716.0857992c.9596285 1.03499176-.0591716 2.1158208-.0591716 2.1158208L7.76457238 16.0327973s-.42749168.4615171-1.15029.3934c-.72279833-.068117-1.064-.5881-1.064-.5881l-4.14048-5.46188c-.50045-.66017996-.37097-1.60105996.289203-2.10150996.660177-.50046 1.601057-.37098 2.101517.2892z" />
          </svg>
        </Slider>
      </Box>
    );
  }
}
export default SlideToggle;
