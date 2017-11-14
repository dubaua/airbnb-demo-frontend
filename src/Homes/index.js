import React from "react";
import { Row, Col } from "react-flexbox-grid";
import {
  SectionHead,
  Container,
  Slider,
  TitleH2,
  TitleH3,
  About,
  Section,
  SeeAll,
  Card,
  Next,
  Prev
} from "../CommonStyles";
import Preview from "../Preview";
import Rating from "../Rating";

import pic1 from "./pic-1.png";
import pic2 from "./pic-2.png";
import pic3 from "./pic-3.png";

const cards = [
  {
    title: "La Salentina, see, nature &amp; relax",
    about: "Entire house · 9 beds",
    price: 82,
    rating: {
      stars: 5,
      counter: 97,
      suffix: " · Superhost"
    },
    url: "la-salentina-see-nature-and-relax",
    imageUrl: pic1
  },
  {
    title: "Your private 3 bedr. riad and exclusive sauna long text",
    about: "Entire house · 5 beds",
    price: 82,
    rating: {
      stars: 5,
      counter: 161,
      suffix: " · Superhost"
    },
    url: "your-private-3-bedr-riad-and-exclusive-sauna",
    imageUrl: pic2
  },
  {
    title: "Dreamy Tropical Tree House",
    about: "Entire house · 1 bed",
    price: 200,
    rating: {
      stars: 5,
      counter: 364,
      suffix: " · Superhost"
    },
    url: "dreamy-tropical-tree-house",
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
              <TitleH2>Homes</TitleH2>
            </Col>
            <Col xs={2}>
              <SeeAll href="homes">See all</SeeAll>
            </Col>
          </Row>
        </SectionHead>
      </Container>
      <Container scroll>
        <Slider>
          {cards.map((card, index) => (
            <Col xs={8} md={5} lg={4} key={index.toString()}>
              <Card href={card.url}>
                <Preview src={card.imageUrl} />
                <TitleH3 cropped>
                  ${card.price} {card.title}
                </TitleH3>
                <About>{card.about}</About>
                <Rating data={card.rating} />
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
