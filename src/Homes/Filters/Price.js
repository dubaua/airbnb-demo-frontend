import React from "react";
import {
  Dropdown,
  Toggle,
  Content,
  Filters,
  Sublabel,
  Button,
  Controls
} from "./styled";
import Rheostat from "rheostat";
import "./rheostat.css";
import styled from "styled-components";

const PriceFilter = styled(Filters)`
  font-weight: lighter;
  width: 230px;
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 1.16;
`;

class Price extends React.Component {
  state = {
    priceRange: this.props.priceRange,
    label: "Price"
  };

  onPriceChange = priceRange => {
    const label = `$${priceRange.values[0]} — $${priceRange.values[1]}`;
    this.setState({
      priceRange: priceRange,
      label: label
    });
  };

  onApply = () => {
    this.props.onApply(this.state.priceRange);
  };

  onCancel = () => {
    this.setState(
      {
        priceRange: this.props.priceRange
      },
      () => {
        this.onPriceChange(this.state.priceRange);
        this.props.toggleFilter(null);
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
            <PriceFilter>
              <Title>
                ${this.state.priceRange.values[0]} — ${
                  this.state.priceRange.values[1]
                }+
              </Title>
              <Sublabel>The average nightly price is $75.</Sublabel>
              <Rheostat
                min={this.state.priceRange.min}
                max={this.state.priceRange.max}
                values={this.state.priceRange.values}
                onChange={this.onPriceChange}
              />
            </PriceFilter>
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

export default Price;
