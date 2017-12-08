import React from "react";
import {
  Dropdown,
  Toggle,
  Content,
  Header,
  Cross,
  Reset,
  Filters,
  Filter,
  Footer,
  Button,
  Controls
} from "./styled";
import { Row, Col } from "react-flexbox-grid";
import { ToMd, Md } from "../../UI/Media";
import Counter from "../../UI/Counter";
import styled from "styled-components";

const Label = styled.div`
  width: 180px;
`;
const Title = styled.div`
  font-size: 20px;
`;
const Subtitle = styled.div`
  font-size: 16px;
  font-weight: lighter;
  margin-top: 7px;
`;

class Guests extends React.Component {
  state = {
    guests: this.props.guests,
    label: "Guests"
  };

  updateLabel = guests => {
    const adults = guests.adults;
    const children = guests.children;
    const infants = guests.infants;
    // some ugly conditional concatenation
    const count = `${adults + children} guest${
      adults + children > 1 ? "s" : ""
    }`;
    const infant = `${infants} infant${infants > 1 ? "s" : ""}`;
    const label = infants ? `${count}, ${infant}` : count;
    this.setState({
      label: label
    });
  };

  onGuestsChange = (value, resource, key) => {
    this.setState(
      prevState => ({
        [resource]: { ...prevState[resource], [key]: value }
      }),
      () => {
        this.updateLabel(this.state.guests);
      }
    );
  };

  onApply = () => {
    this.props.onApply(this.state.guests);
  };

  onReset = () => {
    this.setState(
      {
        guests: this.props.guests
      },
      () => {
        this.updateLabel(this.state.guests);
      }
    );
  };

  onCancel = () => {
    this.onReset();
    this.props.toggleFilter(null);
  };

  onToggle = () => {
    this.props.toggleFilter(this.props.filterId);
  };

  render() {
    return (
      <Dropdown>
        <Toggle
          onClick={this.onToggle}
          active={this.props.currentFilter === this.props.filterId}
        >
          {this.state.label}
        </Toggle>
        {this.props.currentFilter === this.props.filterId && (
          <Content>
            <ToMd>
              <Header>
                <Row middle="xs">
                  <Col xs={2}>
                    <Cross onClick={this.onCancel}>
                      <svg
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.33335 14.00005c.4.4.4 1.0666 0 1.4666-.4.4-1.0667.4-1.4667 0L8.00002 9.46668l-6 5.99997c-.4.4-1.06667.4-1.46667 0-.4-.4-.4-1.0666 0-1.4666l6-6.00003-5.866667-6c-.3999997-.4-.3999997-1.06667 0-1.46667.4-.4 1.066667-.4 1.466667 0l5.86667 6 6.00003-6c.4-.4 1.0666-.4 1.4666 0 .4.4.4 1.06667 0 1.46667l-5.99997 6 5.86667 6.00003z"
                          fill="#484848"
                        />
                      </svg>
                    </Cross>
                  </Col>
                  <Col xs={8}>{this.state.label}</Col>
                  <Col xs={2}>
                    <Reset onClick={this.onReset}>Reset</Reset>
                  </Col>
                </Row>
              </Header>
            </ToMd>
            <Filters>
              <Filter>
                <Label>
                  <Title>Adults</Title>
                </Label>
                <Counter
                  resource={"guests"}
                  _key={"adults"}
                  value={this.state.guests.adults}
                  min={1}
                  max={10}
                  onChange={this.onGuestsChange}
                />
              </Filter>
              <Filter>
                <Label>
                  <Title>Children</Title>
                  <Subtitle>Ages 2 — 12</Subtitle>
                </Label>
                <Counter
                  resource={"guests"}
                  _key={"children"}
                  value={this.state.guests.children}
                  min={0}
                  max={10}
                  onChange={this.onGuestsChange}
                />
              </Filter>
              <Filter>
                <Label>
                  <Title>Infants</Title>
                  <Subtitle>Under 2</Subtitle>
                </Label>
                <Counter
                  resource={"guests"}
                  _key={"infants"}
                  value={this.state.guests.infants}
                  min={0}
                  max={10}
                  onChange={this.onGuestsChange}
                />
              </Filter>
            </Filters>
            <Md>
              <Controls>
                <Button onClick={this.onCancel}>Cancel</Button>
                <Button onClick={this.onApply}>Apply</Button>
              </Controls>
            </Md>
            <ToMd>
              <Footer>
                <Button primary full onClick={this.onApply}>
                  Save
                </Button>
              </Footer>
            </ToMd>
          </Content>
        )}
      </Dropdown>
    );
  }
}

export default Guests;
