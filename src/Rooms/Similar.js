import React from "react";
import styled from "styled-components";
import { Col } from "react-flexbox-grid";
import { Container, Slider, Next, Prev } from "../CommonStyles";
import { H2 } from "./styled";
import Card from "./Card";

const similar = [
  {
    title: "Apartamento, piscina y parqueadero para 8 personas",
    beds: 3,
    price: 50,
    rating: {
      average: 5,
      counter: 4
    },
    slug: "apartamento-piscina-y-parqueadero-para-8-personas",
    imageUrl: require("./home-1.png")
  },
  {
    title: "Full apartment in the best area of the city",
    beds: 4,
    price: 51,
    slug: "full-apartment-in-the-best-area-of-the-city",
    imageUrl: require("./home-2.png")
  },
  {
    title: "Beautiful Apartament North Armenia Quindio",
    beds: 4,
    price: 45,
    rating: {
      average: 5,
      counter: 3
    },
    slug: "beautiful-apartament-north-armenia-quindio",
    imageUrl: require("./home-3.png")
  }
];

const Wrapper = styled.div``;
const Title = styled(H2)`
  margin: 48px 0 16px;
`;

class Similar extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title>Similar listings</Title>
        </Container>
        <Container scroll>
          <Slider>
            {similar.map((room, index) => (
              <Col xs={10} md={5} lg={4} key={index.toString()}>
                <Card data={room} />
              </Col>
            ))}
            <Prev />
            <Next />
          </Slider>
        </Container>
      </Wrapper>
    );
  }
}
export default Similar;
