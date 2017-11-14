import React from "react";
import { Title, Nav, Link } from "./styled";

class Menu extends React.Component {
  render() {
    const items = this.props.data.items;
    const menu = items.map((item, index) => (
      <Link href={item.href} key={index.toString()}>
        {item.title}
      </Link>
    ));
    return (
      <Nav>
        <Title>{this.props.data.title}</Title>
        {menu}
      </Nav>
    );
  }
}
export default Menu;
