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

import Pic1 from "./pic-1.png";
import Pic2 from "./pic-2.png";
import Pic3 from "./pic-3.png";

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
          <Col lg={4} md={5} xs={8}>
            <Card>
              <Preview src={Pic2} />
              <TitleH3 cropped>
                $82 La Salentina, see, nature &amp; relax
              </TitleH3>
              <About>Entire house · 9 beds</About>
              <Rating stars="5" counter="97" suffix="· Superhost" />
            </Card>
          </Col>
          <Col lg={4} md={5} xs={8}>
            <Card>
              <Preview src={Pic1} />
              <TitleH3 cropped>
                $82 Your private 3 bedr. riad and exclusive sauna long text
              </TitleH3>
              <About>Entire house · 5 beds</About>
              <Rating stars="5" counter="161" suffix="· Superhost" />
            </Card>
          </Col>
          <Col lg={4} md={5} xs={8}>
            <Card>
              <Preview src={Pic3} />
              <TitleH3 cropped>$200 Dreamy Tropical Tree House</TitleH3>
              <About>Entire house · 1 bed</About>
              <Rating stars="5" counter="364" suffix="· Superhost" />
            </Card>
          </Col>
          <Prev />
          <Next />
        </Slider>
      </Container>
    </Section>
  );
};
