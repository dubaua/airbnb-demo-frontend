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
export const Header = styled.div`
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  text-align: center;
  height: 22px;
`;
export const Cross = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  display: block;
  line-height: 0;
  margin: 0;
  margin-right: auto;
  padding: 0;
`;
export const Reset = styled.button`
  background: none;
  border: 0;
  color: #0f7276;
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: 14px;
  margin: 0;
  margin-left: auto;
  padding: 0;
`;
export const Footer = styled.div`
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  height: 59px;
`;

export const Content = styled.div`
  background: #ffffff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    position: absolute;
    top: calc(100% + 8px);
    bottom: auto;
    left: auto;
    right: auto;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
  }
`;

export const Filters = styled.div`
  padding: 24px 16px 0;
  flex-grow: 1;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  cursor: pointer;
  flex-grow: 1;
  font-size: 18px;
  font-weight: lighter;
  line-height: 1.16;
`;

export const Sublabel = styled.span`
  display: block;
  font-size: 14px;
  margin-top: 4px;
`;

export const LabelInfo = styled.span`
  display: block;
  font-size: 16px;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: ${props => (props.right ? "flex-end" : "space-between")};
  padding: 16px;
`;

export const Button = styled(UIButton)`
  font-size: 16px;
  background: ${props => (props.primary ? "#FF5A5F;" : "white")};
  color: ${props => (props.primary ? "white;" : "#0F7276")};
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  width: ${props => (props.full ? "100%;" : "auto")};
  @media only screen and (min-width: 768px) {
    background: ${props => (props.primary ? "#0F7276;" : "white")};
  }
`;
