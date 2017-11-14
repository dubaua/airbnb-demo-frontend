import styled, { css } from "styled-components";

export const Footer = styled.footer`
  margin-top: 64px;
  border-top: 1px solid #eee;
`;

export const Main = styled.div`
  padding: 16px 0 24px;
  @media only screen and (min-width: 768px) {
    padding: 48px 0 32px;
  }
`;

export const About = styled.div`
  border-top: 1px solid #eee;
  font-size: 12px;
  padding: 16px 0;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    padding: 32px 0;
  }
`;

export const Logo = styled.img`
  display: inline-block;
  margin-right: 12px;
  width: 18px;
  height: 19px;
  @media only screen and (min-width: 768px) {
    width: 21px;
    height: 22px;
  }
`;

export const Copy = styled.div`
  align-items: center;
  color: #636363;
  display: flex;
`;

export const Extra = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  @media only screen and (min-width: 768px) {
    margin-top: 0;
    justify-content: flex-end;
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
export const Social = styled.div`
  align-items: center;
  display: flex;
  margin-left: 10px;
`;
export const Link = styled.a`
  text-align: right;
  text-decoration: none;
  color: #636363;
  display: block;
  &:not(:first-child) {
    margin-left: 16px;
  }
  ${props => props.image && css`line-height: 0;`};
`;
export const Icon = styled.img`
  width: 16px;
  height: 16px;
  @media only screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
