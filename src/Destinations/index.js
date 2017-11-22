import React from "react";
import { Col } from "react-flexbox-grid";
import Header from "../UI/Header";
import { Container, Section, Slider, Next, Prev } from "../CommonStyles";
import Card from "./Card";

const destinations = [
  {
    title: "Paris",
    slug: "paris",
    imageUrl: require("./pic-1.png")
  },
  {
    title: "Miami",
    slug: "miami",
    imageUrl: require("./pic-2.png")
  },
  {
    title: "Tokyo",
    slug: "tokyo",
    imageUrl: require("./pic-3.png")
  },
  {
    title: "Cape town",
    slug: "cape-town",
    imageUrl: require("./pic-4.png")
  },
  {
    title: "Seoul",
    slug: "seoul",
    imageUrl: require("./pic-5.png")
  },
  {
    title: "Los Angeles",
    slug: "los-angeles",
    imageUrl: require("./pic-6.png")
  }
];

export default () => {
  return (
    <Section>
      <Container>
        <Header>Featured destinations</Header>
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
