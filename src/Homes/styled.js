import styled from "styled-components";
import { Link as RLink } from "react-router-dom";
import pin from "./pin.svg";

export const Link = styled(RLink)`
  color: inherit;
  display: block;
  overflow: hidden;
  text-decoration: none;
  margin: 24px 0 0;
  @media only screen and (min-width: 768px) {
    margin: ${props => (props.stock ? "22px 0" : "0")};
  }
`;

export const Title = styled.h3`
  font-size: 13px;
  margin: 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    margin-top: 8px;
  }
`;

export const About = styled.p`
  font-size: 15px;
  margin: 0 0 4px;
  font-weight: 200;
`;

export const Filters = styled.section`
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  background: white;
  position: fixed;
  top: 81px;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const More = styled.div`
  margin: 36px 0 24px;
  color: #636363;
  text-align: center;
`;

export const Main = styled.div`
  padding-top: 58px;
  padding-bottom: 64px;
  position: relative;
  @media only screen and (min-width: 768px) {
    padding-bottom: 10px;
  }
`;

export const MapIcon = styled.div`
  position: absolute;
  bottom: 24px;
  right: 8px;
  width: 40px;
  height: 40px;
  background: url(${pin}) center center no-repeat #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.16);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  @media only screen and (min-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;
