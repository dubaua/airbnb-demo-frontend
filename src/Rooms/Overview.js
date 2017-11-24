import React from "react";
import { Md, ToMd, MdOnly } from "../UI/Media";
import { Row, Col } from "react-flexbox-grid";
import {
  Section,
  Link,
  Title,
  Subtitle,
  H3,
  Params,
  Param,
  Host,
  About,
  Amenitiy,
  Rules,
  Cancellation,
  Hr,
  Dash
} from "./styled";
import Spoiler from "./Spoiler";
import Cropped from "./Cropped";
import Userpic from "./Userpic";
import Highlight from "./Highlight";

import host from "./host.png";

const params = [
  {
    title: "2 guests",
    icon: require("./guest.svg")
  },
  {
    title: "Studio",
    icon: require("./door.svg")
  },
  {
    title: "2 beds",
    icon: require("./bed.svg")
  },
  {
    title: "1 bath",
    icon: require("./bathtub.svg")
  }
];

const amenities = [
  {
    title: "Internet",
    icon: require("./internet.svg")
  },
  {
    title: "Family/kid friendly",
    icon: require("./family.svg")
  },
  {
    title: "Wireless Internet",
    icon: require("./wifi.svg")
  },
  {
    title: "Free parking on premises",
    icon: require("./parking.svg")
  },
  {
    title: "Some",
    icon: require("./parking.svg")
  },
  {
    title: "Some",
    icon: require("./parking.svg")
  },
  {
    title: "Some",
    icon: require("./parking.svg")
  },
  {
    title: "Some",
    icon: require("./parking.svg")
  },
  {
    title: "Some",
    icon: require("./parking.svg")
  }
];

const amenitiesPrescription = amenities.slice(0, 4);
const amenitiesFull = amenities.slice(4, amenities.length);

class Overview extends React.Component {
  render() {
    return (
      <Section>
        <Row middle="xs" bottom="md">
          <Col xs={12}>
            <ToMd>
              <Title>Romantic Cabana with view</Title>
            </ToMd>
          </Col>
          <Col xs={10}>
            <Md>
              <Title>Romantic Cabana with view</Title>
            </Md>
            <Subtitle>Entire cabin · Armenia</Subtitle>
            <Md>
              <Params>
                {params.map((param, index) => (
                  <Param key={index.toString()}>
                    <img src={param.icon} alt={param.title} />
                    {param.title}
                  </Param>
                ))}
              </Params>
            </Md>
          </Col>
          <Col xs={2}>
            <Host>
              <Userpic src={host} alt="Yudi & Victoria" badge />
              <Md>
                <div>Yudi & Victoria</div>
              </Md>
            </Host>
          </Col>
          <Col xs={12}>
            <ToMd>
              <Params>
                {params.map((param, index) => (
                  <Param key={index.toString()}>
                    <img src={param.icon} alt={param.title} />
                    {param.title}
                  </Param>
                ))}
              </Params>
            </ToMd>
          </Col>
        </Row>
        <MdOnly>
          <Highlight />
        </MdOnly>
        <About>
          <p>
            Located in the coffee region, in the Andean mountains of Colombia,
            South America, a charming cabana made from bamboo, with a great view
            and a "sendero" or pathway through the bamboo forest which
            criss-crosses our 5 acre organic farm, leading down to a stream. A
            place to relax and commune with nature.
          </p>
          <Spoiler label="Read more about the space">
            <p>
              Joshua Tree National Park is a 15 minute drive from the cabin. The
              Integratron and Giant Rock are also 15 minutes away. The cabin is
              less than two miles from artist Noah Purifoy's famous sculpture
              garden site. Two miles in the other direction is Dhamma Dena,
              teacher Ruth Denison's Vipassana Buddhist center. The always
              swinging Pappy & Harriet's BBQ and music roadhouse in beautiful
              Pioneertown is a 30-minute drive. The Lou Harrison House, which
              hosts occasional devotional, folk and avant garde music events in
              an intimate setting is less than 10 minutes away. We will be happy
              to give you directions to each of these unique places (and many
              others) that we frequent ourselves.
            </p>
            <p>
              The cabin sits on 5 acres, and feels remote, but it's just 12
              minutes from downtown Joshua Tree. You will travel a few miles on
              a secure, hard dirt road to get here. Enjoy the spectacular
              panoramic sunset and sunrise—as well as a blanket of stars. In the
              wintertime, you can build a bonfire too. Sleep comfortably in a
              queen-sized bed.
            </p>
            <p>
              The renovated interior has a cookware-outfitted kitchen and dining
              area. There is an outhouse with a dry toilet and roofless shower a
              few yards from the cabin. Wireless internet is available if you
              require a connection to the digital world. The cabin is equipped
              with air conditioning.
            </p>
          </Spoiler>
          <p>
            <Link to="#">Contact host</Link>
          </p>
        </About>
        <Hr />
        <H3>Amenities</H3>
        <Row>
          {amenitiesPrescription.map((amenitiy, index) => (
            <Col xs={6} key={index.toString()}>
              <Amenitiy>
                <img src={amenitiy.icon} alt={amenitiy.title} />
                {amenitiy.title}
              </Amenitiy>
            </Col>
          ))}
        </Row>
        <Spoiler label="Show all amenities">
          <Row>
            {amenitiesFull.map((amenitiy, index) => (
              <Col xs={6} key={index.toString()}>
                <Amenitiy>
                  <img src={amenitiy.icon} alt={amenitiy.title} />
                  {amenitiy.title}
                </Amenitiy>
              </Col>
            ))}
          </Row>
        </Spoiler>
        <Hr />
        <H3>Always communicate through Airbnb</H3>
        <p>
          To protect your payment, never transfer money or communicate outside
          of the Airbnb website or app.
        </p>
        <p>
          <Link to="#">Learn more</Link>
        </p>
        <Hr />
        <H3>House Rules</H3>
        <Rules>
          <p>Check-in is anytime after 1PM</p>
          <p>Check out by 11AM</p>
          <Spoiler label="Show all rules">
            <p>Do not wank</p>
            <p>Do not awo</p>
            <p>Do not smoke</p>
            <p>Do not drink</p>
            <p>Do not take drugs</p>
            <p>Do not sex</p>
            <p>Do not Rock'n'Roll</p>
            <p>Do not breath</p>
            <p>Do not fuck goose</p>
            <p>Do not wait for answer</p>
            <p>Do not fear</p>
            <p>Do not pain</p>
          </Spoiler>
        </Rules>
        <Hr />
        <H3>Cancellations</H3>
        <Cancellation>
          <p>
            <strong>Free cancellation</strong>
          </p>
          <p>Cancel within 48 hours of booking to get a full refund.</p>
        </Cancellation>
        <Dash />
        <p>Flexible</p>
        <Cropped limit={140}>
          Cancel up to 24 hours before check in and get a full refund (minus
          service fees). Cancel within 24 hours of your trip and the first few
          yards from the cabin. Wireless internet is available if you require a
          connection to the digital world. The cabin is equipped with air
          conditioning.
        </Cropped>
        <Hr />
      </Section>
    );
  }
}
export default Overview;
