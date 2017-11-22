import styled from "styled-components";
import { Button as UIButton } from "../Button";

export const Wrapper = styled.div`
  position: relative;
  display: ${props => (props.onlydesktop ? "none" : "inline-block")};
  &:not(:first-child) {
    margin-left: 9px;
  }
  @media only screen and (min-width: 992px) {
    display: inline-block;
  }
`;

export const Button = styled(UIButton)``;

export const Content = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  background: #ffffff;
  /* border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  padding: 24px 16px;
  padding: 0 0 24px; */
`;
