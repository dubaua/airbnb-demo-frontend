import styled from "styled-components";
import { Link as RLink } from "react-router-dom";

export const Link = styled(RLink)`
  color: inherit;
  display: block;
  text-decoration: none;
`;

export const Label = styled.p`
  font-size: 8px;
  margin: 8px 0 4px;
  line-height: 1;
  font-weight: bold;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
    font-size: 10px;
    margin: 12px 0 8px;
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  margin: 4px 0;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    margin: 8px 0;
  }
`;

export const About = styled.p`
  font-size: 12px;
  margin: 4px 0;
  font-weight: 200;
  @media only screen and (min-width: 768px) {
    margin: 8px 0;
    font-size: 18px;
  }
`;
