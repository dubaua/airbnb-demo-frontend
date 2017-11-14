import styled from "styled-components";
import ArrowDown from "./arrow-down.svg";

export const Wrapper = styled.div``;

export const Option = styled.div`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 8px;
  font-size: 12px;
  font-weight: 200;
  position: relative;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    padding: 14px 8px;
    margin-bottom: 16px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 18px;
    padding: 12px 16px;
  }
`;

export const Arrow = styled.div`
  background: url(${ArrowDown}) no-repeat center center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  width: 13px;
  height: 7px;
  @media only screen and (min-width: 768px) {
    right: 12px;
    width: 15px;
    height: 9px;
  }
  @media only screen and (min-width: 992px) {
    right: 16px;
  }
`;
