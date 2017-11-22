import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "./fonts/webfontkit/circular-air.css";
import Header from "./Header";
import Landing from "./Landing";
import Homes from "./Homes";

const Page = styled.div`
  font-family: "Circular Air", Helvetica, Arial, sans-serif;
  color: #383838;
  padding-top: 81px;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/homes" component={Homes} />
        </Page>
      </Router>
    );
  }
}

export default App;
