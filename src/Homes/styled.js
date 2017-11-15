import styled from "styled-components";

export const Link = styled.a`
  color: inherit;
  display: block;
  overflow: hidden;
  text-decoration: none;
`;

export const Title = styled.h3`
  font-size: 13px;
  margin: 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    margin: 8px 0;
  }
`;

export const About = styled.p`
  font-size: 15px;
  margin: 4px 0;
  font-weight: 200;
  @media only screen and (min-width: 768px) {
    margin: 8px 0;
  }
`;
