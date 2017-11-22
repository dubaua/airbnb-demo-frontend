import React from "react";
import { Col } from "react-flexbox-grid";
import Header from "../UI/Header";
import { Section, Container, Slider } from "../CommonStyles";
import Card from "./Card";

const cards = [
  {
    title: "Homes",
    url: "homes",
    imageUrl: require("./pic-1.png")
  },
  {
    title: "Experiences",
    url: "experiences",
    imageUrl: require("./pic-2.png")
  },
  {
    title: "Restaurants",
    url: "restaurants",
    imageUrl: require("./pic-3.png")
  }
];

export default () => {
  return (
    <Section>
      <Container>
        <Header>Explore Airbnb</Header>
      </Container>
      <Container scroll>
        <Slider>
          {cards.map((card, index) => (
            <Col xs={6} md={5} lg={4} key={index.toString()}>
              <Card data={card} />
            </Col>
          ))}
        </Slider>
      </Container>
    </Section>
  );
};
