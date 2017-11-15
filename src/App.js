import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "./circular-air.css";
import Header from "./Header";
import Landing from "./Landing";
import HomeList from "./HomeList";

const Page = styled.div`
  font-family: "Circular Air", Helvetica, Arial, sans-serif;
  color: #383838;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/homes" component={HomeList} />
          {/* <Route component={NoMatch} /> */}
        </Page>
      </Router>
    );
  }
}

// const NoMatch = () => (
//   <Container>
//     Page not ready yet. <a href="/">Go home</a>, yankee
//   </Container>
// );

export default App;
