import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Container } from "../CommonStyles";
import { More, Main, MapIcon } from "./styled";
import Filters from "./Filters";
import Card from "../Homes/Card";
import Pagination from "../UI/Pagination";
import GoogleMap from "../GoogleMap";

const homes = [
  {
    title: "La Salentina, see, nature &amp; relax",
    about: "Entire house · 9 beds",
    price: 82,
    rating: {
      average: 5,
      counter: 97,
      label: "Superhost"
    },
    slug: "la-salentina-see-nature-and-relax",
    imageUrl: require("./pic-1.png")
  },
  {
    title: "Your private 3 bedr. riad and exclusive sauna long text",
    about: "Entire house · 5 beds",
    price: 82,
    rating: {
      average: 5,
      counter: 161,
      label: "Superhost"
    },
    slug: "your-private-3-bedr-riad-and-exclusive-sauna",
    imageUrl: require("./pic-2.png")
  },
  {
    title: "Dreamy Tropical Tree House",
    about: "Entrie treehouse · 1 bed",
    price: 200,
    rating: {
      average: 5,
      counter: 364,
      label: "Superhost"
    },
    slug: "dreamy-tropical-tree-house",
    imageUrl: require("./pic-3.png")
  },
  {
    title: "Best location old town luxury loft",
    about: "Entire apartment · 1 bed",
    price: 110,
    rating: {
      average: 5,
      counter: 369,
      label: "Superhost"
    },
    slug: "best-location-old-town-luxury-loft",
    imageUrl: require("./pic-4.png")
  },
  {
    title: "Lussuoso. Vista incantevole.",
    about: "Entire apartment · 6 bed",
    price: 200,
    rating: {
      average: 5,
      counter: 105,
      label: "Superhost"
    },
    slug: "lussuoso-vista-incantevole",
    imageUrl: require("./pic-5.png")
  },
  {
    title: "In the historical center of Lecce",
    about: "Entire house · 3 bed",
    price: 200,
    rating: {
      average: 5,
      counter: 221,
      label: "Superhost"
    },
    slug: "in-the-historical-center-of-lecce",
    imageUrl: require("./pic-6.png")
  }
];

class Homelist extends React.Component {
  render() {
    return (
      <div>
        <Filters />
        <Main>
          <Container>
            <Row>
              <Col xs={12} lg={8}>
                <Row>
                  {homes.map((home, index) => (
                    <Col xs={12} md={6} key={index.toString()}>
                      <Card data={home} stock="true" />
                    </Col>
                  ))}
                </Row>
                <Pagination data={"smth"} />
                <More>
                  Enter dates to see full pricing. Additional fees apply. Taxes
                  may be added.
                </More>
              </Col>
              <Col className="hidden-xs hidden-sm hidden-md" lg={4}>
                <GoogleMap />
              </Col>
            </Row>
            <MapIcon />
          </Container>
        </Main>
      </div>
    );
  }
}
export default Homelist;
