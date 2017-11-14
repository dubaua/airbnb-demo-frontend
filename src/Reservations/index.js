import React from "react";
import { Row, Col } from "react-flexbox-grid";
import {
  SectionHead,
  Container,
  TitleH2,
  TitleH3,
  About,
  Label,
  Section,
  SeeAll,
  Slider,
  Card,
  Next,
  Prev
} from "../CommonStyles";
import Preview from "../Preview";

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
              <TitleH2>Popular reservations around the world</TitleH2>
            </Col>
            <Col xs={2}>
              <SeeAll href="reservations">See all</SeeAll>
            </Col>
          </Row>
        </SectionHead>
      </Container>
      <Container scroll>
        <Slider>
          <Col lg={3} md={4} xs={6}>
            <Card>
              <Preview src={Pic4} />
              <Label>Speakeasy</Label>
              <TitleH3 accent>Chumley’s</TitleH3>
              <About accent>About $60 per person</About>
            </Card>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <Card>
              <Preview src={Pic1} />
              <Label>Korean gastropub</Label>
              <TitleH3 accent>Hanjan</TitleH3>
              <About accent>About $50 per person</About>
            </Card>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <Card>
              <Preview src={Pic2} />
              <Label>German american</Label>
              <TitleH3 accent>Prime Meats</TitleH3>
              <About accent>About $55 per person</About>
            </Card>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <Card>
              <Preview src={Pic3} />
              <Label>Fine seafood</Label>
              <TitleH3 accent>Seaprice</TitleH3>
              <About accent>About $70 per person</About>
            </Card>
          </Col>
          <Prev />
          <Next />
        </Slider>
      </Container>
    </Section>
  );
};
