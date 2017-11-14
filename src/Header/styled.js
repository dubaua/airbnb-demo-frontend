import styled from "styled-components";
import search from "./search.svg";

export const Header = styled.header`
  border-bottom: 1px solid #eee;
  padding: 16px 0;
`;

export const Logo = styled.img`
  height: 32px;
  width: 30px;
`;

export const Dropdown = styled.div`position: relative;`;

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
    display: inherit;
  }
`;

export const Input = styled.input`
  font-family: "Circular Air", Helvetica, Arial, sans-serif;
  background: url(${search}) 16px 13px no-repeat #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  font-size: 16px;
  padding: 13px 53px;
`;
