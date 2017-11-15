import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Card from "./Card";
import {
  SectionHead,
  Container,
  TitleH2,
  Section,
  SeeAll,
  Slider,
  Next,
  Prev
} from "../CommonStyles";

import pic1 from "./pic-1.png";
import pic2 from "./pic-2.png";
import pic3 from "./pic-3.png";
import pic4 from "./pic-4.png";

const reservations = [
  {
    title: "Chumley’s",
    about: "About $60 per person",
    label: "Speakeasy",
    url: "chumleys",
    imageUrl: pic4
  },
  {
    title: "Hanjan",
    about: "About $50 per person",
    label: "Korean gastropub",
    url: "hanjan",
    imageUrl: pic1
  },
  {
    title: "Prime Meats",
    about: "About $55 per person",
    label: "German american",
    url: "prime-meats",
    imageUrl: pic2
  },
  {
    title: "Seaprice",
    about: "About $70 per person",
    label: "Fine seafood",
    url: "seaprice",
    imageUrl: pic3
  }
];

export default () => {
  return (
    <Section>
      <Container>
        <SectionHead>
          <Row middle="xs" bottom="md">
            <Col xs={10}>
              <TitleH2>Popular reservations around the world</TitleH2>
            </Col>
            <Col xs={2}>
              <SeeAll href="reservations">See all</SeeAll>
            </Col>
          </Row>
        </SectionHead>
      </Container>
      <Container scroll>
        <Slider>
          {reservations.map((reservation, index) => (
            <Col xs={6} md={4} lg={3} key={index.toString()}>
              <Card data={reservation} />
            </Col>
          ))}
          <Prev />
          <Next />
        </Slider>
      </Container>
    </Section>
  );
};
