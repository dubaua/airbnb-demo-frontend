import styled from "styled-components";

export default styled.button`
  background: #ff5a5f;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  font: inherit;
  letter-spacing: 0.07em;
  margin: 0;
  padding: 8px 16px;
  text-align: center;
  width: ${props => (props.full ? "100%" : "auto")};
  &:hover {
    background: #f53d43;
  }
  &:active {
    background: #ed262c;
  }
`;
