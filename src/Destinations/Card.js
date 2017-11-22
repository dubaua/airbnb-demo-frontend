import React from "react";
import { Link, Title } from "./styled";
import Preview from "../Preview";

class Card extends React.Component {
  render() {
    const card = this.props.data;
    return (
      <Link to={card.slug}>
        <Preview src={card.imageUrl} />
        <Title>{card.title}</Title>
      </Link>
    );
  }
}

export default Card;
