import styled from "styled-components";

export const Button = styled.button`
  background: ${props => (props.active ? "#008489" : "white")};
  color: ${props => (props.active ? "white" : "inherit")};
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.active ? "#008489" : "rgba(72, 72, 72, 0.2)"};
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  padding: 7px 15px;
`;
