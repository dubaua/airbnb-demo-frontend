import styled from "styled-components";
import { Button as UIButton } from "../../UI/Button";

export const Wrapper = styled.section`
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  background: white;
  position: fixed;
  top: 81px;
  left: 0;
  right: 0;
  z-index: 3;
`;

export const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const Dropdown = styled.div`
  display: inline-block;
  position: relative;
  &:not(:first-child) {
    margin-left: 12px;
  }
`;

export const Toggle = styled(UIButton)``;

export const Content = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  z-index: 2;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: ${props => (props.right ? "flex-end" : "space-between")};
  padding: 16px;
`;

export const Button = styled(UIButton)`
  font-size: 16px;
  background: ${props => (props.primary ? "#008489;" : "white")};
  color: ${props => (props.primary ? "white;" : "#008489")};
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
`;
