import React from "react";
import { Dropdown, Toggle, Content, Button, Controls } from "./styled";
import Counter from "../../UI/Counter";
import styled from "styled-components";
const Filters = styled.div`
  padding: 30px 24px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
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

  onCancel = () => {
    this.setState(
      {
        guests: this.props.guests
      },
      () => {
        this.updateLabel(this.state.guests);
        this.props.toggleFilter();
      }
    );
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
            <Controls>
              <Button onClick={this.onCancel}>Cancel</Button>
              <Button onClick={this.onApply}>Apply</Button>
            </Controls>
          </Content>
        )}
      </Dropdown>
    );
  }
}

export default Guests;
