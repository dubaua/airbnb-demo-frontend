import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link, Container } from "../CommonStyles";
import { Header, Logo, Dropdown, Arrow, Input, Nav } from "./styled";
import logo from "./logo.svg";
import arrow from "./arrow.svg";

export default () => {
  return (
    <Header>
      <Container>
        <Row middle="xs">
          <Col lg={1} md={1} xs={2}>
            <Dropdown>
              <Link href="/">
                <Logo src={logo} />
              </Link>
              <Arrow src={arrow} />
            </Dropdown>
          </Col>
          <Col lg={5} md={7} xs={10}>
            <Input placeholder="Try “Miami”" />
          </Col>
          <Col lg={4} lgOffset={2} md={0}>
            <Nav>
              <Link href="/become-a-host">Become a host</Link>
              <Link href="/help">Help</Link>
              <Link href="/sign-in">Sign Up</Link>
              <Link href="/login">Login</Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Header>
  );
};
