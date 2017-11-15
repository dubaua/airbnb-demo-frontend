import styled from "styled-components";

export const Link = styled.a`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  color: inherit;
  display: block;
  overflow: hidden;
  text-decoration: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 17px;
  }
`;

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-left: 12px;
  padding: 12px 0;
  @media only screen and (min-width: 768px) {
    font-size: 17px;
    margin-left: 24px;
    padding: 0;
  }
`;

export const Image = styled.div`
  width: 100%;
  @media only screen and (min-width: 768px) {
    max-width: 96px;
  }
`;
