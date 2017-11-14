import React from "react";
import { Col } from "react-flexbox-grid";
import {
  SectionHead,
  Container,
  TitleH2,
  TitleH3,
  Section,
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
import pic5 from "./pic-5.png";
import pic6 from "./pic-6.png";

const cards = [
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
          {cards.map((card, index) => (
            <Col xs={4} md={3} lg={2} key={index.toString()}>
              <Card href={card.url}>
                <Preview src={card.imageUrl} />
                <TitleH3>{card.title}</TitleH3>
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
