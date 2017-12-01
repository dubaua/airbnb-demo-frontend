import React from "react";
import { Dropdown, Toggle, Content, Button, Controls } from "./styled";
import SlideToggle from "../../UI/SlideToggle";
import styled from "styled-components";

const Filter = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 24px 16px;
`;

const Label = styled.div`
  width: 200px;
`;

const Title = styled.div`
  font-size: 18px;
`;

const Subtitle = styled.div`
  font-size: 14px;
  font-weight: lighter;
  margin-top: 4px;
`;

class Price extends React.Component {
  state = {
    instantBook: this.props.instantBook,
    label: "Instant book"
  };

  onInstantBookChange = instantBook => {
    console.log(instantBook);
    const label = instantBook ? "Instant book: on" : "Instant book: off";
    this.setState({
      instantBook: instantBook,
      label: label
    });
  };

  onApply = () => {
    this.props.onApply(this.state.instantBook);
  };

  onCancel = () => {
    this.setState(
      {
        instantBook: this.props.instantBook
      },
      () => {
        this.onInstantBookChange(this.state.instantBook);
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
            <Filter>
              <Label>
                <Title>Instant Book</Title>
                <Subtitle>
                  Listings you can book without waiting for host approval.
                </Subtitle>
              </Label>
              <SlideToggle
                value={this.props.instantBook}
                onChange={this.onInstantBookChange}
              />
            </Filter>
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
