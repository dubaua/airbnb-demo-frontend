import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "./fonts/webfontkit/circular-air.css";
import Header from "./Header";
import Landing from "./Landing";
import Homes from "./Homes";
import Rooms from "./Rooms";

const Page = styled.div`
  font-family: "Circular Air", Helvetica, Arial, sans-serif;
  color: #383838;
  padding-top: 81px;

  & :focus {
    outline: none;
    box-shadow: 0 0 2px 1px #008489;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/homes" component={Homes} />
          <Route path="/rooms" component={Rooms} />
        </Page>
      </Router>
    );
  }
}

export default App;
