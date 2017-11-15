import styled, { css } from "styled-components";

export const Wrapper = styled.div`margin-bottom: 40px;`;

export const Steps = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px 0;
`;
export const Step = styled.div`
  display: flex;
  align-items: center;
  color: #0f7276;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0 3px;
  ${props => props.nav && css`box-shadow: inset 0 0 0 1px #008489;`};
  ${props =>
    props.current &&
    css`
      background: #008489;
      color: white;
    `};
`;
