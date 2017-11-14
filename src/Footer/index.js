import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Menu from "../Menu";
import Select from "../Select";
import { Container } from "../CommonStyles";
import {
  Footer,
  Main,
  About,
  Logo,
  Copy,
  Nav,
  Extra,
  Social,
  Link,
  Icon
} from "./styled";
import logo from "./logo.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

const menuAirbnb = {
  title: "Airbnb",
  items: [
    {
      title: "About us",
      href: "about-us"
    },
    {
      title: "Careers",
      href: "careers"
    },
    {
      title: "Press",
      href: "press"
    },
    {
      title: "Policies",
      href: "policies"
    },
    {
      title: "Help",
      href: "help"
    },
    {
      title: "Diversity & Belonging",
      href: "diversity-and-belonging"
    }
  ]
};

const menuDiscover = {
  title: "Discover",
  items: [
    {
      title: "Trust & Safety",
      href: "trust-and-safety"
    },
    {
      title: "Travel Credit",
      href: "travel-credit"
    },
    {
      title: "Gift Cards",
      href: "gift-cards"
    },
    {
      title: "Airbnb Citizen",
      href: "airbnb-citizen"
    },
    {
      title: "Business Travel",
      href: "business-travel"
    },
    {
      title: "Guidebooks",
      href: "guidebooks"
    },
    {
      title: "Airbnbmag",
      href: "airbnbmag"
    }
  ]
};

const menuHosting = {
  title: "Hosting",
  items: [
    {
      title: "Why Host",
      href: "why-host"
    },
    {
      title: "Hospitality",
      href: "hospitality"
    },
    {
      title: "Responsible Hosting",
      href: "responsible-hosting"
    },
    {
      title: "Community Center",
      href: "community-center"
    }
  ]
};

export default () => {
  return (
    <Footer>
      <Container>
        <Main>
          <Row>
            <Col xs={12} md={3}>
              <Row>
                <Col xs={6} md={12}>
                  <Select option="English" />
                </Col>
                <Col xs={6} md={12}>
                  <Select option="United States dollar" />
                </Col>
              </Row>
            </Col>
            <Col className="hidden-xs hidden-sm" md={2} mdOffset={1}>
              <Menu data={menuAirbnb} />
            </Col>
            <Col className="hidden-xs hidden-sm" md={2} mdOffset={1}>
              <Menu data={menuDiscover} />
            </Col>
            <Col className="hidden-xs hidden-sm" md={2} mdOffset={1}>
              <Menu data={menuHosting} />
            </Col>
          </Row>
        </Main>
      </Container>
      <Container>
        <About>
          <Row between="xs" middle="xs">
            <Col xs={12} md={6}>
              <Copy>
                <Logo src={logo} /> © Airbnb Inc.
              </Copy>
            </Col>
            <Col xs={12} md={6}>
              <Extra>
                <Nav>
                  <Link href="terms">Terms</Link>
                  <Link href="privacy">Privacy</Link>
                  <Link href="site-map">Site Map</Link>
                </Nav>
                <Social>
                  <Link href="https://www.facebook.com/" image>
                    <Icon src={facebook} />
                  </Link>
                  <Link href="https://twitter.com/" image>
                    <Icon src={twitter} />
                  </Link>
                  <Link href="https://www.instagram.com/" image>
                    <Icon src={instagram} />
                  </Link>
                </Social>
              </Extra>
            </Col>
          </Row>
        </About>
      </Container>
    </Footer>
  );
};
