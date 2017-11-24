import React from "react";
import styled from "styled-components";
import Highlight from "./Highlight";
import Summary from "./Summary";
import { Button } from "./styled";

const Wrapper = styled.div``;
const Row = styled.div`
  display: flex;
`;
const Col = styled.div`
  flex-basis: 50%;
  max-width: 50%;
`;

const Form = styled.div`
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  border-top: 1px solid rgba(118, 118, 118, 0.2);
  font-weight: normal;
  margin-top: 24px;
`;

const Label = styled.div`
  font-size: 12px;
  margin: 16px 0 8px;
`;
const Filter = styled.div`
  border: 1px solid rgba(118, 118, 118, 0.2);
  border-left: ${props => (props.last ? "none" : null)};
  padding: 12px;
  color: #636363;
  font-size: 14px;
`;
const Go = styled.div`
  margin: 24px 0;
`;
const Note = styled.div`
  font-size: 12px;
  margin-top: 12px;
  text-align: center;
`;
class Book extends React.Component {
  render() {
    return (
      <Wrapper>
        <Summary />
        <Form>
          <Row>
            <Col>
              <Label>Check In</Label>
              <Filter>mm/dd/yyyy</Filter>
            </Col>
            <Col>
              <Label>Check Out</Label>
              <Filter last>mm/dd/yyyy</Filter>
            </Col>
          </Row>
          <Label>Guests</Label>
          <Filter>1 guest</Filter>
          <Go>
            <Button full>Request to Book</Button>
            <Note>You won't be charged yet</Note>
          </Go>
        </Form>
        <Highlight />
      </Wrapper>
    );
  }
}
export default Book;
