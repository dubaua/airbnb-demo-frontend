import { Row } from "react-flexbox-grid";
import styled from "styled-components";
import ArrowNext from "./arrow-next.svg";
import ArrowPrev from "./arrow-prev.svg";

export const Section = styled.section`
  margin: 40px 0;
  @media only screen and (min-width: 992px) {
    margin: 48px 0;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-right: 8px;
  padding-left: 8px;
  overflow: ${props => (props.scroll ? "auto" : "inherit")};
  @media only screen and (min-width: 576px) {
    width: 560px;
    max-width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 752px;
    max-width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: 976px;
    max-width: 100%;
    overflow: inherit;
  }
`;

export const Slider = styled(Row)`
  flex-wrap: nowrap !important;
  position: relative;
`;

export const Link = styled.a`
  color: #383838;
  text-decoration: none;
  font-size: 12px;
  line-height: 24px;
  display: inline-block;
  padding: 0 8px;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Next = styled.div`
  width: 40px;
  height: 40px;
  background: url(${ArrowNext}) no-repeat center center #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  position: absolute;
  top: 42%;
  right: 8px;
  transform: translate(50%, -50%);
  display: none;
  @media only screen and (min-width: 992px) {
    display: inherit;
  }
`;

export const Prev = styled.div`
  width: 40px;
  height: 40px;
  background: url(${ArrowPrev}) no-repeat center center #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  position: absolute;
  top: 42%;
  left: 8px;
  transform: translate(-50%, -50%);
  display: none;
  @media only screen and (min-width: 992px) {
    display: inherit;
    display: none;
  }
`;

export const Button = styled.button`
  border: 1px solid rgba(72, 72, 72, 0.2);
  background: white;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  padding: 7px 16px;
  user-select: none;
  &:not(:first-child) {
    margin-left: 12px;
  }
`;
export const Hr = styled.hr`
  border: none;
  margin: 16px 0;
  border-bottom: 1px solid #e4e4e4;
`;
