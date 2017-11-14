import React from "react";
import { Col } from "react-flexbox-grid";
import {
  SectionHead,
  Container,
  TitleH2,
  TitleH3,
  Section,
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
import Pic5 from "./pic-5.png";
import Pic6 from "./pic-6.png";

export default () => {
  return (
    <Section>
      <Container>
        <SectionHead>
          <TitleH2>Featured destinations</TitleH2>
        </SectionHead>
      </Container>
      <Container scroll>
        <Slider>
          <Col lg={2} md={3} xs={4}>
            <Card>
              <Preview src={Pic1} />
              <TitleH3>Paris</TitleH3>
            </Card>
          </Col>
          <Col lg={2} md={3} xs={4}>
            <Card>
              <Preview src={Pic2} />
              <TitleH3>Miami</TitleH3>
            </Card>
          </Col>
          <Col lg={2} md={3} xs={4}>
            <Card>
              <Preview src={Pic3} />
              <TitleH3>Tokyo</TitleH3>
            </Card>
          </Col>
          <Col lg={2} md={3} xs={4}>
            <Card>
              <Preview src={Pic4} />
              <TitleH3>Cape town</TitleH3>
            </Card>
          </Col>
          <Col lg={2} md={3} xs={4}>
            <Card>
              <Preview src={Pic5} />
              <TitleH3>Seoul</TitleH3>
            </Card>
          </Col>
          <Col lg={2} md={3} xs={4}>
            <Card>
              <Preview src={Pic6} />
              <TitleH3>Los Angeles</TitleH3>
            </Card>
          </Col>
          <Prev />
          <Next />
        </Slider>
      </Container>
    </Section>
  );
};
