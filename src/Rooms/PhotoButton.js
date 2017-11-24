import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  font-family: inherit;
  font-size: 14px;
  padding: 5px;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    background: white;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    padding: 11px 16px;
    &:not(:first-child) {
      margin-left: 16px;
    }
  }
`;
export const XsIcon = styled.img`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const Icon = styled.img`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
    margin-right: 12px;
  }
`;
export const Label = styled.span`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
  font-weight: ${props => (props.strong ? "bold" : "normal")};
`;

export default ({ xsIcon, icon, ...props }) => (
  <Button>
    {xsIcon && <XsIcon src={xsIcon} />}
    {icon && <Icon src={icon} />}
    <Label strong={!icon}>{props.children}</Label>
  </Button>
);
