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
import { Pad, Title, Image } from "./styled";
import Pic1 from "./pic-1.png";
import Pic2 from "./pic-2.png";
import Pic3 from "./pic-3.png";

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
          <Col lg={4} md={5} xs={6}>
            <Pad>
              <Image>
                <Preview src={Pic1} />
              </Image>
              <Title>Homes</Title>
            </Pad>
          </Col>
          <Col lg={4} md={5} xs={6}>
            <Pad>
              <Image>
                <Preview src={Pic2} />
              </Image>
              <Title>Experiences</Title>
            </Pad>
          </Col>
          <Col lg={4} md={5} xs={6}>
            <Pad>
              <Image>
                <Preview src={Pic3} />
              </Image>
              <Title>Restaurants</Title>
            </Pad>
          </Col>
        </Slider>
      </Container>
    </Section>
  );
};
