import React from "react";
import { Wrapper, Title, Link } from "./styled";

// inspired by Jesus Cries
export default ({ to, ...props }) => (
  <Wrapper>
    <Title>{props.children}</Title>
    {to && <Link to={to}>See all</Link>}
  </Wrapper>
);
