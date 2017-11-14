import React from "react";
import { Row, Col } from "react-flexbox-grid";
import {
  SectionHead,
  Container,
  TitleH2,
  TitleH3,
  About,
  Label,
  Section,
  SeeAll,
  Slider,
  Card,
  Next,
  Prev
} from "../CommonStyles";
import Preview from "../Preview";

import pic1 from "./pic-1.png";
import pic2 from "./pic-2.png";
import pic3 from "./pic-3.png";
import pic4 from "./pic-4.png";

const cards = [
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
          {cards.map((card, index) => (
            <Col xs={6} md={4} lg={3} key={index.toString()}>
              <Card href={card.url}>
                <Preview src={card.imageUrl} />
                <Label>{card.label}</Label>
                <TitleH3 accent>{card.title}</TitleH3>
                <About accent>{card.about}</About>
              </Card>
            </Col>
          ))}
          <Prev />
          <Next />
        </Slider>
      </Container>
    </Section>
  );
};
