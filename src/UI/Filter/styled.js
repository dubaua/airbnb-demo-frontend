import styled from "styled-components";
import { Button as UIButton } from "../Button";
import onClickOutside from "react-onclickoutside";

export const Wrapper = styled.div`
  position: relative;
  display: ${props => (props.mdOnly ? "none" : "inline-block")};
  &:not(:first-child) {
    margin-left: 9px;
  }
  @media only screen and (min-width: 992px) {
    display: inline-block;
  }
`;

export const Toggle = styled(UIButton)``;

export const Dropdown = onClickOutside(styled.div`
  position: absolute;
  top: calc(100% + 8px);
  z-index: 2;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`);

export const Content = styled.div`padding: 16px 24px;`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled(UIButton)`
  font-size: 16px;
  background: ${props => (props.active ? "white" : "inherit")};
  color: ${props => (props.muted ? "#636363;" : "#0f7276")};
  border: none;
  border-radius: 0;
  padding: 29px 24px;
  &:hover {
    background: ${props => (props.muted ? "#63636320;" : "#0f727620")};
  }
`;
