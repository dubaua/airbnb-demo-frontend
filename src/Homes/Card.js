import React from "react";
import { Link, Title, About } from "./styled";
import Preview from "../Preview";
import Rating from "../Rating";

class Card extends React.Component {
  render() {
    const card = this.props.data;
    return (
      <Link to={card.slug} stock={this.props.stock}>
        <Preview src={card.imageUrl} />
        <Title>
          ${card.price} {card.title}
        </Title>
        <About>{card.about}</About>
        <Rating data={card.rating} />
      </Link>
    );
  }
}

export default Card;
