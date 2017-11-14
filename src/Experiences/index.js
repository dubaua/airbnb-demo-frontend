import React from "react";
import { Row, Col } from "react-flexbox-grid";
import {
  SectionHead,
  Container,
  TitleH2,
  TitleH3,
  Muted,
  Section,
  SeeAll,
  Slider,
  Card,
  Next,
  Prev
} from "../CommonStyles";
import Preview from "../Preview";
import Rating from "../Rating";

import Pic1 from "./pic-1.png";
import Pic2 from "./pic-2.png";
import Pic3 from "./pic-3.png";
import Pic4 from "./pic-4.png";

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
          <Col lg={3} md={4} xs={6}>
            <Card>
              <Preview src={Pic1} />
              <TitleH3>
                $29 <Muted>Forest therapy</Muted>
              </TitleH3>
              <Rating stars="5" counter="44" suffix="reviews" />
            </Card>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <Card>
              <Preview src={Pic2} />
              <TitleH3>
                $69 <Muted>Whale watching</Muted>
              </TitleH3>
              <Rating stars="5" counter="46" suffix="reviews" />
            </Card>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <Card>
              <Preview src={Pic3} />
              <TitleH3>
                $69 <Muted>Table Mountain Summit, Cable Car Down</Muted>
              </TitleH3>
              <Rating stars="5" counter="44" suffix="reviews" />
            </Card>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <Card>
              <Preview src={Pic4} />
              <TitleH3>
                $50 <Muted>Salsa Night</Muted>
              </TitleH3>
              <Rating stars="5" counter="44" suffix="reviews" />
            </Card>
          </Col>
          <Prev />
          <Next />
        </Slider>
      </Container>
    </Section>
  );
};
