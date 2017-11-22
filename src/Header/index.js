import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Container } from "../CommonStyles";
import {
  Header,
  Logo,
  LogoLink,
  Dropdown,
  Arrow,
  Input,
  Nav,
  Link
} from "./styled";
import logo from "./logo.svg";
import arrow from "./arrow.svg";

export default () => {
  return (
    <Header>
      <Container>
        <Row middle="xs">
          <Col lg={1} md={1} xs={2}>
            <Dropdown>
              <LogoLink to="/">
                <Logo src={logo} />
              </LogoLink>
              <Arrow src={arrow} />
            </Dropdown>
          </Col>
          <Col lg={5} md={7} xs={10}>
            <Input placeholder="Try “Miami”" />
          </Col>
          <Col lg={4} lgOffset={2} md={0}>
            <Nav>
              <Link to="/become-a-host">Become a host</Link>
              <Link to="/help">Help</Link>
              <Link to="/sign-in">Sign Up</Link>
              <Link to="/login">Log In</Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Header>
  );
};
