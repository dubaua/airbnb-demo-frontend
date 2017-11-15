import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Pagination from "react-paginate";
import { Container, TitleH3, About, Card, Button } from "../CommonStyles";
import Preview from "../Preview";
import Rating from "../Rating";
// import Pagination from "../Pagination";
import Map from "../Map";
import { Filters, More } from "./styled";

import pic1 from "./pic-1.png";
import pic2 from "./pic-2.png";
import pic3 from "./pic-3.png";
import pic4 from "./pic-4.png";
import pic5 from "./pic-5.png";
import pic6 from "./pic-6.png";

const cards = [
  {
    title: "La Salentina, see, nature &amp; relax",
    about: "Entire house · 9 beds",
    price: 82,
    rating: {
      stars: 5,
      counter: 97,
      suffix: " · Superhost"
    },
    url: "la-salentina-see-nature-and-relax",
    imageUrl: pic1
  },
  {
    title: "Your private 3 bedr. riad and exclusive sauna long text",
    about: "Entire house · 5 beds",
    price: 82,
    rating: {
      stars: 5,
      counter: 161,
      suffix: " · Superhost"
    },
    url: "your-private-3-bedr-riad-and-exclusive-sauna",
    imageUrl: pic2
  },
  {
    title: "Dreamy Tropical Tree House",
    about: "Entrie treehouse · 1 bed",
    price: 200,
    rating: {
      stars: 5,
      counter: 364,
      suffix: " · Superhost"
    },
    url: "dreamy-tropical-tree-house",
    imageUrl: pic3
  },
  {
    title: "Best location old town luxury loft",
    about: "Entire apartment · 1 bed",
    price: 110,
    rating: {
      stars: 5,
      counter: 369,
      suffix: " · Superhost"
    },
    url: "best-location-old-town-luxury-loft",
    imageUrl: pic4
  },
  {
    title: "Lussuoso. Vista incantevole.",
    about: "Entire apartment · 6 bed",
    price: 200,
    rating: {
      stars: 5,
      counter: 105,
      suffix: " · Superhost"
    },
    url: "lussuoso-vista-incantevole.",
    imageUrl: pic5
  },
  {
    title: "In the historical center of Lecce",
    about: "Entire house · 3 bed",
    price: 200,
    rating: {
      stars: 5,
      counter: 221,
      suffix: " · Superhost"
    },
    url: "in-the-historical-center-of-lecce",
    imageUrl: pic6
  }
];

export default () => {
  return (
    <div>
      <Filters>
        <Container>
          <Button>Dates</Button>
          <Button>Guests</Button>
          <Button>Room type</Button>
          <Button>Price</Button>
          <Button>Instant book</Button>
          <Button>More filters</Button>
        </Container>
      </Filters>
      <Container>
        <Row>
          <Col xs={12} lg={8}>
            <Row>
              {cards.map((card, index) => (
                <Col xs={12} md={6} key={index.toString()}>
                  <Card stock href={card.url}>
                    <Preview src={card.imageUrl} />
                    <TitleH3 cropped>
                      ${card.price} {card.title}
                    </TitleH3>
                    <About>{card.about}</About>
                    <Rating data={card.rating} />
                  </Card>
                </Col>
              ))}
            </Row>
            <Pagination
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={<a href="">...</a>}
              breakClassName={"break-me"}
              // pageCount={this.state.pageCount}
              pageCount={17}
              marginPagesDisplayed={2}
              pageRangeDisplayed={0}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
            <More>
              Enter dates to see full pricing. Additional fees apply. Taxes may
              be added.
            </More>
          </Col>
          <Col className="hidden-xs hidden-sm  hidden-md" lg={4}>
            <Map />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
