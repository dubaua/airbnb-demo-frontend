import React from "react";
import { Col } from "react-flexbox-grid";
import Header from "../UI/Header";
import { Container, Section, Slider, Next, Prev } from "../CommonStyles";
import Card from "./Card";

const experiences = [
  {
    title: "Forest therapy",
    price: 29,
    rating: {
      average: 5,
      counter: 44
    },
    url: "forest-therapy",
    imageUrl: require("./pic-1.png")
  },
  {
    title: "Whale watching",
    price: 69,
    rating: {
      average: 5,
      counter: 44
    },
    url: "whale-watching",
    imageUrl: require("./pic-2.png")
  },
  {
    title: "Table Mountain Summit, Cable Car Down",
    price: 69,
    rating: {
      average: 5,
      counter: 44
    },
    url: "table-mountain-summit-cable-car-down",
    imageUrl: require("./pic-3.png")
  },
  {
    title: "Salsa Night",
    price: 50,
    rating: {
      average: 5,
      counter: 44
    },
    url: "salsa-night",
    imageUrl: require("./pic-4.png")
  }
];

export default () => {
  return (
    <Section>
      <Container>
        <Header to="/experiences">Experiences</Header>
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
