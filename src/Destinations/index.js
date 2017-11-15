import React from "react";
import { Col } from "react-flexbox-grid";
import Card from "./Card";
import {
  SectionHead,
  Container,
  TitleH2,
  Section,
  Slider,
  Next,
  Prev
} from "../CommonStyles";

import pic1 from "./pic-1.png";
import pic2 from "./pic-2.png";
import pic3 from "./pic-3.png";
import pic4 from "./pic-4.png";
import pic5 from "./pic-5.png";
import pic6 from "./pic-6.png";

const destinations = [
  {
    title: "Paris",
    url: "paris",
    imageUrl: pic1
  },
  {
    title: "Miami",
    url: "miami",
    imageUrl: pic2
  },
  {
    title: "Tokyo",
    url: "tokyo",
    imageUrl: pic3
  },
  {
    title: "Cape town",
    url: "cape-town",
    imageUrl: pic4
  },
  {
    title: "Seoul",
    url: "seoul",
    imageUrl: pic5
  },
  {
    title: "Los Angeles",
    url: "los-angeles",
    imageUrl: pic6
  }
];

export default () => {
  return (
    <Section>
      <Container>
        <SectionHead>
          <TitleH2>Featured destinations</TitleH2>
        </SectionHead>
      </Container>
      <Container scroll>
        <Slider>
          {destinations.map((destination, index) => (
            <Col xs={4} md={3} lg={2} key={index.toString()}>
              <Card data={destination} />
            </Col>
          ))}
          <Prev />
          <Next />
        </Slider>
      </Container>
    </Section>
  );
};
