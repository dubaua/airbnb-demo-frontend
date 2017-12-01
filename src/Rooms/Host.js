import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { Section, H2, Subtitle } from "./styled";
import Cropped from "../UI/Cropped";
import Userpic from "./Userpic";
import verified from "./verified.png";
import host from "./host.png";

const About = styled.div`
  & ul {
    margin: 1em 0;
    list-style: none;
    padding: 0;
  }
  & li {
    margin-bottom: 4px;
  }
`;

const User = styled.div`
  max-width: 60px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    max-width: 88px;
  }
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Badge = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 24px;
  margin-right: 32px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: auto;
  }
  & img {
    margin-right: 16px;
  }
`;
const Reviews = styled.div`
  background: linear-gradient(165deg, #ffc333 50%, #ffb400 50%);
  font-size: 18px;
  color: white;
  padding: 6px 10px;
  line-height: 1;
  font-weight: normal;
  border-radius: 6px;
  margin-right: 16px;
`;
const Button = styled.a`
  border-radius: 2px;
  border: 1px solid #008489;
  box-sizing: border-box;
  color: #0f7276;
  display: inline-block;
  font-size: 14px;
  margin-top: 16px;
  padding: 7px 12px;
  text-decoration: none;
`;

class Host extends React.Component {
  render() {
    return (
      <Section id="theHost">
        <Row>
          <Col xs={9} md={10}>
            <H2>Hosted by Yudy & Victoria</H2>
            <Subtitle>
              Santa Ana, California, United States · Joined in August 2014
            </Subtitle>
          </Col>
          <Col xs={3} md={2}>
            <User>
              <Userpic src={host} alt="Yudi & Victoria" badge />
            </User>
          </Col>
        </Row>

        <Badges>
          <Badge>
            <Reviews>153</Reviews>
            Reviews
          </Badge>
          <Badge>
            <img src={verified} alt="Verified" />
            Verified
          </Badge>
        </Badges>
        <Cropped>
          Joshua Tree National Park is a 15 minute drive from the cabin. The
          Integratron and Giant Rock are also 15 minutes away. The cabin is less
          than two miles from artist Noah Purifoy's famous sculpture garden
          site. Two miles in the other direction is Dhamma Dena, teacher Ruth
          Denison's Vipassana Buddhist center. The always swinging Pappy &
          Harriet's BBQ and music roadhouse in beautiful Pioneertown is a
          30-minute drive. The Lou Harrison House, which hosts occasional
          devotional, folk and avant garde music events in an intimate setting
          is less than 10 minutes away. We will be happy to give you directions
          to each of these unique places (and many others) that we frequent
          ourselves.
        </Cropped>
        <Button>Contact host</Button>
        <About>
          <ul>
            <li>
              Languages: <strong>English, Español</strong>
            </li>
            <li>
              Response rate: <strong>100%</strong>
            </li>
            <li>
              Response time: <strong>within a few hours</strong>
            </li>
          </ul>
        </About>
      </Section>
    );
  }
}
export default Host;
