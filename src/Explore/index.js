import React from "react";
import { Col } from "react-flexbox-grid";
import {
  TitleH2,
  Section,
  SectionHead,
  Container,
  Slider
} from "../CommonStyles";
import Preview from "../Preview";
import { Link, Title, Image } from "./styled";

// can I make it less ugly?
import pic1 from "./pic-1.png";
import pic2 from "./pic-2.png";
import pic3 from "./pic-3.png";

const cards = [
  {
    title: "Homes",
    url: "homes",
    imageUrl: pic1
  },
  {
    title: "Experiences",
    url: "experiences",
    imageUrl: pic2
  },
  {
    title: "Restaurants",
    url: "restaurants",
    imageUrl: pic3
  }
];

export default () => {
  return (
    <Section>
      <Container>
        <SectionHead>
          <TitleH2>Explore Airbnb</TitleH2>
        </SectionHead>
      </Container>
      <Container scroll>
        <Slider>
          {cards.map((card, index) => (
            <Col xs={6} md={5} lg={4} key={index.toString()}>
              <Link href={card.url}>
                <Image>
                  <Preview src={card.imageUrl} />
                </Image>
                <Title>{card.title}</Title>
              </Link>
            </Col>
          ))}
        </Slider>
      </Container>
    </Section>
  );
};
