import React from "react";
import { Link as RLink } from "react-router-dom";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { Container } from "../CommonStyles";
import { H2 } from "./styled";

const places = [
  {
    title: "Cartagena Vacation Rentals",
    slug: "cartagena-vacation-rentals"
  },
  {
    title: "San Andrés Vacation Rentals",
    slug: "san-andres-vacation-rentals"
  },
  {
    title: "Willemstad Vacation Rentals",
    slug: "willemstad-vacation-rentals"
  },
  {
    title: "Bucaramanga",
    slug: "bucaramanga"
  },
  {
    title: "Bogota",
    slug: "bogota"
  },
  {
    title: "Cali",
    slug: "cali"
  },
  {
    title: "Manuel Antonio",
    slug: "manuel-antonio"
  },
  {
    title: "Santa Marta (Distrito Turistico Cultural E Historico)",
    slug: "santa-marta-distrito-turistico-cultural-e-historico"
  },
  {
    title: "Chia",
    slug: "chia"
  },
  {
    title: "Cartagena De Indias (Distrito Turistico Y Cultural)",
    slug: "cartagena-de-indias-distrito-turistico-y-cultural"
  },
  {
    title: "Rionegro",
    slug: "rionegro"
  },
  {
    title: "Ibague",
    slug: "ibague"
  },
  {
    title: "Quito",
    slug: "quito"
  },
  {
    title: "Anapoima",
    slug: "anapoima"
  },
  {
    title: "Medellin",
    slug: "medellin"
  },
  {
    title: "Santander de Quilichao",
    slug: "santander-de-quilichao"
  },
  {
    title: "Puerto Rico",
    slug: "puerto-rico"
  },
  {
    title: "Tabio",
    slug: "tabio"
  }
];

const Wrapper = styled.div``;
const Title = styled(H2)`
  margin: 48px 0 16px;
`;

const About = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin: 16px 0;
`;
const More = styled.div`
  font-size: 18px;
  margin-right: 1em;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: auto;
  }
`;
const Links = styled.div`
  color: #636363;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: auto;
  }
`;
const Link = styled(RLink)`
  text-decoration: none;
  color: inherit;
`;
const Separator = styled.span`
  display: inline-block;
  margin: 0 0.4em;
`;
const Place = styled(RLink)`
  color: #636363;
  font-size: 14px;
  text-decoration: none;
`;

class Other extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title>Explore other options in and around Armenia</Title>
          <About>
            <More>More places to stay in Armenia:</More>
            <Links>
              <Link to="#">Apartments</Link>
              <Separator>·</Separator>
              <Link to="#">Houses</Link>
              <Separator>·</Separator>
              <Link to="#">Bed & Breakfasts</Link>
              <Separator>·</Separator>
              <Link to="#">Lofts</Link>
              <Separator>·</Separator>
              <Link to="#">Villas</Link>
            </Links>
          </About>
          <Row bottom="xs">
            {places.map((place, index) => (
              <Col xs={12} md={4} key={index.toString()}>
                <Place to={place.slug}>{place.title}</Place>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
export default Other;
