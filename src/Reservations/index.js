import React from "react";
import { Col } from "react-flexbox-grid";
import Header from "../UI/Header";
import { Container, Section, Slider, Next, Prev } from "../CommonStyles";
import Card from "./Card";

const reservations = [
  {
    title: "Chumley’s",
    about: "About $60 per person",
    label: "Speakeasy",
    slug: "chumleys",
    imageUrl: require("./pic-1.png")
  },
  {
    title: "Hanjan",
    about: "About $50 per person",
    label: "Korean gastropub",
    slug: "hanjan",
    imageUrl: require("./pic-2.png")
  },
  {
    title: "Prime Meats",
    about: "About $55 per person",
    label: "German american",
    slug: "prime-meats",
    imageUrl: require("./pic-3.png")
  },
  {
    title: "Seaprice",
    about: "About $70 per person",
    label: "Fine seafood",
    slug: "seaprice",
    imageUrl: require("./pic-4.png")
  }
];

export default () => {
  return (
    <Section>
      <Container>
        <Header to="/reservations">
          Popular reservations around the world
        </Header>
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
