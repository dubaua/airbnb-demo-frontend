import React from "react";
import { Lg, ToLg } from "../UI/Media";
import { Row, Col } from "react-flexbox-grid";
import { StickyContainer, Sticky } from "react-sticky";
import {
  Wrapper,
  Nav,
  Anchor,
  Separator,
  Main,
  Hr,
  Report,
  Pad,
  BookBottom
} from "./styled";
import { Container } from "../CommonStyles";

import Gallery from "./Gallery";
import Overview from "./Overview";
import Reviews from "./Reviews";
import Host from "./Host";
import Location from "./Location";
import GoogleMap from "./GoogleMap";
import Similar from "./Similar";
import Other from "./Other";
import Book from "./Book";
import Summary from "./Summary";
import Button from "./Button";
import Footer from "../Footer";

function stickyBook({ isSticky, style }) {
  return (
    <div style={{ ...style, paddingTop: isSticky ? 81 : null }}>
      <Pad>
        <Book />
      </Pad>
    </div>
  );
}

function stickyNav({ isSticky, style }) {
  return (
    <div style={{ ...style, top: isSticky ? 81 : null }}>
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
    </div>
  );
}

export default () => {
  return (
    <Wrapper>
      <Gallery />
      <Container>
        <StickyContainer>
          <Row>
            <Col xs={12} lg={8}>
              <Sticky topOffset={-85}>{stickyNav}</Sticky>
              <Main>
                <Overview />
                <Reviews />
                <Host />
                <Location />
              </Main>
            </Col>
            <Col xs lg={4}>
              <Lg>
                <Sticky topOffset={-85}>{stickyBook}</Sticky>
              </Lg>
            </Col>
          </Row>
        </StickyContainer>
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
