import React from "react";
import { Lg, ToLg } from "../UI/Media";
import { Row, Col } from "react-flexbox-grid";
import {
  Wrapper,
  Nav,
  Anchor,
  Separator,
  Main,
  Hr,
  Report,
  Pad,
  BookBottom,
  Button
} from "./styled";
import { Container } from "../CommonStyles";

import Photoes from "./Photoes";
import Overview from "./Overview";
import Reviews from "./Reviews";
import Host from "./Host";
import Location from "./Location";
import GoogleMap from "./GoogleMap";
import Similar from "./Similar";
import Other from "./Other";
import Book from "./Book";
import Summary from "./Summary";
import Footer from "../Footer";

// TODO create button components with svg <use> or smthg better

export default () => {
  return (
    <Wrapper>
      <Photoes />
      <Container>
        <Row>
          <Col xs={12} lg={8}>
            <Nav>
              <Anchor href="#overview" active="true">
                Overview
              </Anchor>
              <Separator />
              <Anchor href="#reviews">Reviews</Anchor>
              <Separator />
              <Anchor href="#theHost">The Host</Anchor>
              <Separator />
              <Anchor href="#location">Location</Anchor>
            </Nav>
            <Hr />
            <Main>
              <Overview id="overview" />
              <Reviews id="reviews" />
              <Host id="theHost" />
              <Location id="location" />
            </Main>
          </Col>
          <Col xs lg={4}>
            <Lg>
              <Pad>
                <Book />
              </Pad>
            </Lg>
          </Col>
        </Row>
        <GoogleMap />
        <p>
          Exact location information is provided after a booking is confirmed.
        </p>
        <Hr />
        <Report>Report this listing</Report>
        <Hr />
      </Container>
      <Similar />
      <Other />
      <Footer />
      <ToLg>
        <BookBottom>
          <Summary />
          <Button>Request to Book</Button>
        </BookBottom>
      </ToLg>
    </Wrapper>
  );
};
