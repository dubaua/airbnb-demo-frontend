import React from "react";
import Preview from "../Preview";
import Rating from "../Rating";
import { Link as RLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(RLink)`
  color: inherit;
  display: block;
  text-decoration: none;
`;

const About = styled.div`
  color: ${props => (props.hot ? "#8D1F13" : null)};
  font-size: 10px;
  font-weight: bold;
  margin: 12px 0 0;
  text-transform: uppercase;
`;
const Title = styled.h3`
  font-size: 15px;
  margin: 4px 0;
`;
const Price = styled.p`
  font-size: 15px;
  font-weight: lighter;
  margin: 4px 0;
`;

const New = styled.div`
  background: #008489;
  border-radius: 2px;
  color: white;
  display: inline-block;
  font-size: 12px;
  font-weight: normal;
  padding: 4px;
  text-transform: uppercase;
`;

const Save = styled.div``;

class Card extends React.Component {
  render() {
    const card = this.props.data;
    return (
      <Link to={card.slug}>
        <Preview src={card.imageUrl}>
          <Save />
        </Preview>
        <About hot={card.beds > 3}>Entire apartment · {card.beds} beds</About>
        <Title>{card.title}</Title>
        <Price>${card.price} per night</Price>
        {card.rating ? <Rating data={card.rating} /> : <New>New</New>}
      </Link>
    );
  }
}

export default Card;
