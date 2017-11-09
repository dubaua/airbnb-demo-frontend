import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./circular-air.css";
import "flexboxgrid2";
import Header from "./Header";

const Page = styled.header`
  font-family: "Circular Air", Helvetica, Arial, sans-serif;
  color: #383838;
`;

class App extends Component {
  render() {
    return (
      <Page>
        <Header />
      </Page>
    );
  }
}

export default App;
