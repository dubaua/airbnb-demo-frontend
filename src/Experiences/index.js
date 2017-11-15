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

const experiences = [
  {
    title: "Forest therapy",
    price: 29,
    rating: {
      stars: 5,
      counter: 44,
      suffix: "reviews"
    },
    url: "forest-therapy",
    imageUrl: pic1
  },
  {
    title: "Whale watching",
    price: 69,
    rating: {
      stars: 5,
      counter: 44,
      suffix: "reviews"
    },
    url: "whale-watching",
    imageUrl: pic2
  },
  {
    title: "Table Mountain Summit, Cable Car Down",
    price: 69,
    rating: {
      stars: 5,
      counter: 44,
      suffix: "reviews"
    },
    url: "table-mountain-summit-cable-car-down",
    imageUrl: pic3
  },
  {
    title: "Salsa Night",
    price: 50,
    rating: {
      stars: 5,
      counter: 44,
      suffix: "reviews"
    },
    url: "salsa-night",
    imageUrl: pic4
  }
];

export default () => {
  return (
    <Section>
      <Container>
        <SectionHead>
          <Row middle="xs" bottom="md">
            <Col xs={10}>
              <TitleH2>Experiences</TitleH2>
            </Col>
            <Col xs={2}>
              <SeeAll href="experiences">See all</SeeAll>
            </Col>
          </Row>
        </SectionHead>
      </Container>
      <Container scroll>
        <Slider>
          {experiences.map((experience, index) => (
            <Col xs={6} md={4} lg={3} key={index.toString()}>
              <Card data={experience} />
            </Col>
          ))}
          <Prev />
          <Next />
        </Slider>
      </Container>
    </Section>
  );
};
