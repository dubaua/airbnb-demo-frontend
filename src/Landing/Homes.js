import React from "react";
import { Col } from "react-flexbox-grid";
import Header from "../UI/Header";
import { Container, Slider, Section, Next, Prev } from "../CommonStyles";
import Card from "../Homes/Card";

const homes = [
  {
    title: "La Salentina, see, nature &amp; relax",
    about: "Entire house · 9 beds",
    price: 82,
    rating: {
      average: 5,
      counter: 97,
      label: "Superhost"
    },
    slug: "la-salentina-see-nature-and-relax",
    imageUrl: require("./pic-1.png")
  },
  {
    title: "Your private 3 bedr. riad and exclusive sauna long text",
    about: "Entire house · 5 beds",
    price: 82,
    rating: {
      average: 5,
      counter: 161,
      label: "Superhost"
    },
    slug: "your-private-3-bedr-riad-and-exclusive-sauna",
    imageUrl: require("./pic-2.png")
  },
  {
    title: "Dreamy Tropical Tree House",
    about: "Entire house · 1 bed",
    price: 200,
    rating: {
      average: 5,
      counter: 364,
      label: "Superhost"
    },
    slug: "dreamy-tropical-tree-house",
    imageUrl: require("./pic-3.png")
  }
];

export default () => {
  return (
    <Section>
      <Container>
        <Header to="/homes">Homes</Header>
      </Container>
      <Container scroll>
        <Slider>
          {homes.map((home, index) => (
            <Col xs={8} md={5} lg={4} key={index.toString()}>
              <Card data={home} />
            </Col>
          ))}
          <Prev />
          <Next />
        </Slider>
      </Container>
    </Section>
  );
};
