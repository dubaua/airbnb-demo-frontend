import React, { Component } from "react";
import styled from "styled-components";
import "./circular-air.css";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import Footer from "./Footer";

const Page = styled.div`
  font-family: "Circular Air", Helvetica, Arial, sans-serif;
  color: #383838;
`;

class App extends Component {
  render() {
    return (
      <Page>
        <Header />
        <Explore />
        <Experiences />
        <Homes />
        <Reservations />
        <Destinations />
        <Footer />
      </Page>
    );
  }
}

export default App;
