import React from "react";
import Media from "react-media";
import { xs, sm, md, lg, xl } from "../Media";
import { Row, Col } from "react-flexbox-grid";
import {
  Wrapper,
  Photoes,
  Container,
  Section,
  Actions,
  View,
  Nav,
  Link,
  Main,
  Details,
  Title,
  Subtitle,
  Info,
  Params,
  Param,
  ParamIcon,
  Host,
  Preview,
  Badge,
  About,
  Amenitiy,
  AmenitiyIcon,
  Cancellation,
  CancellationTitle,
  Hr,
  Dash,
  H2,
  Summary
} from "./styled";
import Stars from "./Stars";
import Button from "./Button";
import Spoiler from "./Spoiler";
import Review from "./Review";
import Pagination from "../UI/Pagination";

// TODO create button components with svg <use> or smthg better
import xsShare from "./xsshare.svg";
import share from "./share.svg";
import xsLike from "./xslike.svg";
import like from "./like.svg";

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

const reviewsSummary = [
  {
    title: "Accuracy",
    average: 5
  },
  {
    title: "Communication",
    average: 5
  },
  {
    title: "Cleanliness",
    average: 5
  },
  {
    title: "Location",
    average: 5
  },
  {
    title: "Check In",
    average: 5
  },
  {
    title: "Value",
    average: 5
  }
];

const reviews = [
  {
    imageUrl: require("./pic-1.png"),
    name: "Marlee",
    date: "November 2017",
    text:
      "This was one of my favourite places we stayed in all on Colombia. A very peaceful setting and a great spot to unwind."
  },
  {
    imageUrl: require("./pic-2.png"),
    name: "Michelle",
    date: "November 2017",
    text:
      "Joshua Tree National Park is a 15 minute drive from the cabin. The Integratron and Giant Rock are also 15 minutes away. The cabin is less than two miles from artist Noah Purifoy's famous sculpture garden site. Two miles in the other direction is Dhamma Dena, teacher Ruth Denison's Vipassana Buddhist center. The always swinging Pappy & Harriet's BBQ and music roadhouse in beautiful Pioneertown is a 30-minute drive. The Lou Harrison House, which hosts occasional devotional, folk and avant garde music events in an intimate setting is less than 10 minutes away. We will be happy to give you directions to each of these unique places (and many others) that we frequent ourselves."
  }
];

export default () => {
  return (
    <Wrapper>
      <Photoes>
        <Container>
          <Actions>
            <Button xsIcon={xsShare} icon={share}>
              Share
            </Button>
            <Button xsIcon={xsLike} icon={like}>
              Save
            </Button>
          </Actions>
          <View>
            <Button>View Photos</Button>
          </View>
        </Container>
      </Photoes>
      <Container>
        <Row>
          <Col xs={12} lg={8}>
            <Nav>
              <Link to="#overview">Overview</Link>
              <Link to="#reviews">Reviews</Link>
              <Link to="#theHost">The Host</Link>
              <Link to="#location">Location</Link>
            </Nav>
            <Hr />
            <Main>
              <Section id="overview">
                <Details>
                  <Title>Romantic Cabana with view</Title>
                  <Info>Entire cabin · Armenia</Info>
                  <Params>
                    {params.map((param, index) => (
                      <Param key={index.toString()}>
                        <ParamIcon src={param.icon} alt={param.title} />
                        {param.title}
                      </Param>
                    ))}
                  </Params>
                </Details>
                <Host>
                  <Preview>
                    <Badge />
                  </Preview>
                </Host>
                <About>
                  <p>
                    Located in the coffee region, in the Andean mountains of
                    Colombia, South America, a charming cabana made from bamboo,
                    with a great view and a "sendero" or pathway through the
                    bamboo forest which criss-crosses our 5 acre organic farm,
                    leading down to a stream. A place to relax and commune with
                    nature.
                  </p>
                  <Spoiler label="Read more about the space">
                    <p>
                      Joshua Tree National Park is a 15 minute drive from the
                      cabin. The Integratron and Giant Rock are also 15 minutes
                      away. The cabin is less than two miles from artist Noah
                      Purifoy's famous sculpture garden site. Two miles in the
                      other direction is Dhamma Dena, teacher Ruth Denison's
                      Vipassana Buddhist center. The always swinging Pappy &
                      Harriet's BBQ and music roadhouse in beautiful Pioneertown
                      is a 30-minute drive. The Lou Harrison House, which hosts
                      occasional devotional, folk and avant garde music events
                      in an intimate setting is less than 10 minutes away. We
                      will be happy to give you directions to each of these
                      unique places (and many others) that we frequent
                      ourselves.
                    </p>
                    <p>
                      The cabin sits on 5 acres, and feels remote, but it's just
                      12 minutes from downtown Joshua Tree. You will travel a
                      few miles on a secure, hard dirt road to get here. Enjoy
                      the spectacular panoramic sunset and sunrise—as well as a
                      blanket of stars. In the wintertime, you can build a
                      bonfire too. Sleep comfortably in a queen-sized bed.
                    </p>
                    <p>
                      The renovated interior has a cookware-outfitted kitchen
                      and dining area. There is an outhouse with a dry toilet
                      and roofless shower a few yards from the cabin. Wireless
                      internet is available if you require a connection to the
                      digital world. The cabin is equipped with air
                      conditioning.
                    </p>
                  </Spoiler>
                  <p>
                    <Link to="#">Contact host</Link>
                  </p>
                </About>
                <Hr />
                <Subtitle>Amenities</Subtitle>
                <Row>
                  {amenitiesPrescription.map((amenitiy, index) => (
                    <Col xs lg={6} key={index.toString()}>
                      <Amenitiy>
                        <AmenitiyIcon
                          src={amenitiy.icon}
                          alt={amenitiy.title}
                        />
                        {amenitiy.title}
                      </Amenitiy>
                    </Col>
                  ))}
                </Row>
                <Spoiler label="Show all amenities">
                  <Row>
                    {amenitiesFull.map((amenitiy, index) => (
                      <Col xs lg={6} key={index.toString()}>
                        <Amenitiy>
                          <AmenitiyIcon
                            src={amenitiy.icon}
                            alt={amenitiy.title}
                          />
                          {amenitiy.title}
                        </Amenitiy>
                      </Col>
                    ))}
                  </Row>
                </Spoiler>
                <Hr />
                <Subtitle>Always communicate through Airbnb</Subtitle>
                <p>
                  To protect your payment, never transfer money or communicate
                  outside of the Airbnb website or app.
                </p>
                <p>
                  <Link to="#">Learn more</Link>
                </p>
                <Hr />
                <Subtitle>House Rules</Subtitle>
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
                <Hr />
                <Subtitle>Cancellations</Subtitle>
                <Cancellation>
                  <CancellationTitle>Free cancellation</CancellationTitle>
                  <p>Cancel within 48 hours of booking to get a full refund.</p>
                </Cancellation>
                <Dash />
                <p>Flexible</p>
                <p>
                  Cancel up to 24 hours before check in and get a full refund
                  (minus service fees). Cancel within 24 hours of your trip and
                  the first… <Link to="#">readmore</Link>
                </p>
                <Hr />
              </Section>
              <Section id="reviews">
                <Row between="xs">
                  <Col xs>
                    <H2>
                      113 Reviews <Stars />
                    </H2>
                  </Col>
                  <Col xs>Search</Col>
                </Row>
                <Row>
                  {reviewsSummary.map((summary, index) => (
                    <Col xs={12} md={6} key={index.toString()}>
                      <Summary>{summary.title}</Summary>
                    </Col>
                  ))}
                </Row>
                {reviews.map((review, index) => (
                  <Review data={review} key={index.toString()} />
                ))}
                <Pagination />
              </Section>
              <Section id="theHost">The Host</Section>
              <Section id="location">Location</Section>
            </Main>
          </Col>
          <Col xs lg={4}>
            <Media query={lg}>{matches => matches && "Book"}</Media>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};
