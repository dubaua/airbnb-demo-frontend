import React from "react";
import { Link, Title, Image } from "./styled";
import Preview from "../Preview";

class Card extends React.Component {
  render() {
    const card = this.props.data;
    return (
      <Link to={card.url}>
        <Image>
          <Preview src={card.imageUrl} />
        </Image>
        <Title>{card.title}</Title>
      </Link>
    );
  }
}

export default Card;
