import styled from "styled-components";
import { Link as RLink } from "react-router-dom";

export const Link = styled(RLink)`
  color: inherit;
  display: block;
  text-decoration: none;
`;

export const Title = styled.h3`
  font-size: 13px;
  margin: 4px 0;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    margin: 8px 0;
  }
`;

export const Muted = styled.small`
  font-weight: 200;
  font-size: 1em;
`;
