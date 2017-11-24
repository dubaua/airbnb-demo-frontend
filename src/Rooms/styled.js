import styled from "styled-components";
import { Link as RLink } from "react-router-dom";

import shield from "./shield.svg";

export const Wrapper = styled.div`
  font-weight: 300;
`;

export const Section = styled.div`
  margin: 24px 0 48px;
  & strong {
    font-weight: bolder;
  }
  &:last-child {
    margin-bottom: 24px;
  }
`;

export const Link = styled(RLink)`
  font-size: 16px;
  color: #0f7276;
  text-decoration: none;
  font-weight: normal;
`;

export const Nav = styled.div`
  padding-top: 16px;
`;

export const Anchor = styled.a`
  font-size: 16px;
  color: ${props => (props.active ? "black" : "#0f7276")};
  text-decoration: none;
  font-weight: ${props => (props.active ? "bold" : "normal")};
`;

export const Separator = styled.span`
  &:before {
    display: inline-block;
    color: #0f7276;
    content: "·";
    margin: 0 0.4em;
  }
`;

export const Main = styled.div``;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0 0 12px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    font-size: 36px;
  }
`;

export const Subtitle = styled.div`
  color: #636363;
  font-weight: lighter;
  margin: 12px 0;
  @media only screen and (min-width: 768px) {
    margin: 8px 0 16px;
  }
`;

export const H3 = styled.h3`
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Params = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  @media only screen and (min-width: 768px) {
    margin-top: 48px;
  }
`;
export const Param = styled.div`
  flex-basis: 50%;
  max-width: 50%;
  display: flex;
  align-items: center;
  font-weight: lighter;
  font-size: 14px;
  margin: 8px 0;
  @media only screen and (min-width: 768px) {
    flex-basis: auto;
    max-width: none;
    margin: 0;
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
  & img {
    margin-right: 9px;
  }
`;

export const Amenitiy = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: lighter;
  margin-bottom: 28px;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  & img {
    margin-right: 12px;
    min-width: 20px;
  }
`;
export const Host = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 48px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    max-width: 64px;
  }
  & div {
    margin-top: 12px;
  }
`;

export const About = styled.div`
  font-size: 16px;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const Rules = styled.div`
  & p {
    margin: 2px 0;
  }
  & button {
    margin-top: 1em;
  }
`;
export const Cancellation = styled.div`
  background: url(${shield}) right center no-repeat;
  padding-right: 52px;
`;
export const Hr = styled.hr`
  border: none;
  margin: 16px 0;
  border-bottom: 1px solid #e4e4e4;
`;
export const Dash = styled.hr`
  border: none;
  margin: 16px 0;
  border-bottom: 1px solid #e4e4e4;
  width: 66px;
`;
export const H2 = styled.h2`
  font-size: 24px;
  margin: 0;
  @media only screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Pad = styled.div`
  margin-top: 16px;
  padding: 16px 24px;
  border: 1px solid #e4e4e4;
`;

export const BookBottom = styled.div`
  border-top: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding: 12px 8px;
`;

export const Report = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  font: inherit;
  color: #0f7276;
`;

export const Button = styled.button`
  background: #ff5a5f;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  color: white;
  font-size: 16px;
  font-weight: bold;
  font: inherit;
  letter-spacing: 0.07em;
  margin: 0;
  padding: 8px 16px;
  text-align: center;
  width: ${props => (props.full ? "100%" : "auto")};
`;
