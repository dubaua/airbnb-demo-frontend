import styled from "styled-components";
import { Link as RLink } from "react-router-dom";
import search from "./search.svg";

export const Header = styled.header`
  border-bottom: 1px solid #eee;
  background: white;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

export const LogoLink = styled(RLink)`
  display: block;
`;

export const Logo = styled.img`
  height: 32px;
  width: 30px;
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const Arrow = styled.img`
  position: absolute;
  height: 6px;
  width: 10px;
  top: 50%;
  transform: translateY(-50%);
  left: 37px;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  text-align: right;
  display: none;
  @media only screen and (min-width: 992px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Link = styled(RLink)`
  color: inherit;
  display: block;
  font-size: 14px;
  text-decoration: none;
  padding: 3px 8px;
  margin-left: 8px;
`;

export const Input = styled.input`
  font-family: "Circular Air", Helvetica, Arial, sans-serif;
  background: url(${search}) 12px 16px no-repeat #ffffff;
  background-size: 15px 15px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  font-size: 14px;
  padding: 14px 35px;
  @media only screen and (min-width: 768px) {
    background-position: 16px 13px;
    background-size: 20px 21px;
    font-size: 16px;
    padding: 13px 49px;
  }
`;
