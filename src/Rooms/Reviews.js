import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { Section, H2 } from "./styled";
import Pagination from "../UI/Pagination";
import Stars from "./Stars";
import Review from "./Review";
import search from "./search.svg";

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

const Header = styled.div`
  margin-bottom: 24px;
`;

const Total = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const TotalRating = styled.div`
  margin-left: 16px;
  width: 100px;
  @media only screen and (min-width: 768px) {
    width: 120px;
  }
`;

const Summary = styled.div`
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SummaryRating = styled.div`
  width: 100px;
`;

const Search = styled.input`
  background: url(${search}) no-repeat #ffffff;
  background-size: 16px 16px;
  background-position: 12px 12px;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 2px;
  font-family: inherit;
  font-weight: 300;
  font-size: 14px;
  padding: 11px 11px 11px 40px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    background-position: 10px 8px;
    padding: 7px 7px 7px 34px;
  }
`;

class Reviews extends React.Component {
  render() {
    return (
      <Section>
        <Header>
          <Row between="xs" bottom="xs">
            <Col xs={12} md={8}>
              <Total>
                <H2>113 Reviews</H2>
                <TotalRating>
                  <Stars />
                </TotalRating>
              </Total>
            </Col>
            <Col xs={12} md={4}>
              <Search placeholder="Search reviews" />
            </Col>
          </Row>
        </Header>
        <Row>
          {reviewsSummary.map((summary, index) => (
            <Col xs={12} md={6} key={index.toString()}>
              <Summary>
                {summary.title}
                <SummaryRating>
                  <Stars />
                </SummaryRating>
              </Summary>
            </Col>
          ))}
        </Row>
        <div>
          {reviews.map((review, index) => (
            <Review data={review} key={index.toString()} />
          ))}
        </div>
        <Pagination nomore />
      </Section>
    );
  }
}
export default Reviews;
