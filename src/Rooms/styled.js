import styled from "styled-components";
import { Link as RLink } from "react-router-dom";
import photo from "./photo.png";
import shield from "./shield.svg";

import { Container as PContainer } from "../CommonStyles";

export const Wrapper = styled.div``;
export const Section = styled.div`
  &:not(:first-child) {
    margin-top: 48px;
  }
`;
export const Container = styled(PContainer)`
  position: relative;
  height: 290px;
  @media only screen and (min-width: 768px) {
    height: 360px;
  }
  @media only screen and (min-width: 992px) {
    height: 440px;
  }
`;

export const Photoes = styled.div`
  background: url(${photo}) center center no-repeat;
  background-size: auto 100%;
`;
export const Actions = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
  display: flex;
  @media only screen and (min-width: 768px) {
    top: 16px;
  }
`;
export const View = styled.div`
  position: absolute;
  right: 5px;
  bottom: 10px;
  @media only screen and (min-width: 768px) {
    right: auto;
    left: 5px;
    bottom: 24px;
  }
`;
export const Link = styled(RLink)`
  font-size: 16px;
  color: #0f7276;
  text-decoration: none;
  font-weight: normal;
`;
export const Nav = styled.div``;
export const Main = styled.div`
  font-weight: 300;
`;
export const Details = styled.div``;
export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 0;
`;
export const Subtitle = styled.h2`
  font-size: 16px;
  margin-bottom: 16px;
`;
export const Info = styled.div`
  color: #636363;
  font-weight: lighter;
  margin-top: 4px;
`;
export const Params = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
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
  @media only screen and (min-width: 768px) {
    flex-basis: auto;
    max-width: none;
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`;
export const ParamIcon = styled.img`
  margin-right: 9px;
`;
export const Amenitiy = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  font-weight: lighter;
  margin-bottom: 28px;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const AmenitiyIcon = styled.img`
  margin-right: 12px;
  min-width: 20px;
`;
export const Host = styled.div``;
export const Preview = styled.div``;
export const Badge = styled.div``;
export const About = styled.div`
  font-size: 16px;
  font-weight: 300;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const Spoiler = styled.div``;
export const Amenities = styled.div``;
export const Cancellation = styled.div`
  background: url(${shield}) right center no-repeat;
`;
export const CancellationTitle = styled.p`
  font-weight: normal;
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
  font-size: 28px;
  margin: 0;
`;
export const Summary = styled.div`
  font-weight: 300;
`;
