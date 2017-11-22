import React from "react";
import { Link, Label, Title, About } from "./styled";
import Preview from "../Preview";

class Card extends React.Component {
  render() {
    const card = this.props.data;
    return (
      <Link to={card.slug}>
        <Preview src={card.imageUrl} />
        <Label>{card.label}</Label>
        <Title accent>{card.title}</Title>
        <About accent>{card.about}</About>
      </Link>
    );
  }
}

export default Card;
