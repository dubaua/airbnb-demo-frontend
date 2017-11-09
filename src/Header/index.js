// src/Header/index.js
import React from "react";
import { Header, Logo, Nav, Link } from "./styled";
import logo from "./logo.svg";

export default () => {
  return (
    <Header>
      <Logo src={logo} />

      <Nav>
        <Link href="/become-a-host">Become a host</Link>
        <Link href="/help">Help</Link>
        <Link href="/sign-in">Sign Up</Link>
        <Link href="/login">Login</Link>
      </Nav>
    </Header>
  );
};
