import styled from "styled-components";
import ArrowRight from "./arrow-right.svg";
import { Link as RLink } from "react-router-dom";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  @media only screen and (min-width: 768px) {
    align-items: flex-end;
    padding-bottom: 24px;
  }
`;

export const Title = styled.h2`
  line-height: 34px;
  font-size: 24px;
  margin: 0;
  @media only screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Link = styled(RLink)`
  color: #383838;
  display: block;
  font-size: 12px;
  text-align: right;
  text-decoration: none;
  white-space: nowrap;
  margin-left: -8px;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 4px;
  }
  &:after {
    background: url(${ArrowRight}) no-repeat right center;
    content: "";
    width: 6px;
    display: inline-block;
    height: 11px;
    margin-left: 6px;
  }
`;
