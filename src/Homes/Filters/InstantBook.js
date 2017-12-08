import React from "react";
import {
  Dropdown,
  Toggle,
  Content,
  Filter,
  Label,
  Sublabel,
  Button,
  Controls
} from "./styled";
import SlideToggle from "../../UI/SlideToggle";
import styled from "styled-components";

const InstantBookFilter = styled(Filter)`
  padding: 24px 16px 0;
  width: 280px;
`;

const InstantBookLabel = styled(Label)`
  width: 200px;
`;

class Price extends React.Component {
  state = {
    instantBook: this.props.instantBook,
    label: "Instant book"
  };

  onInstantBookChange = instantBook => {
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
            <InstantBookFilter>
              <InstantBookLabel htmlFor="instantBook">
                Instant Book
                <Sublabel>
                  Listings you can book without waiting for host approval.
                </Sublabel>
              </InstantBookLabel>
              <SlideToggle
                forId="instantBook"
                value={this.props.instantBook}
                onChange={this.onInstantBookChange}
              />
            </InstantBookFilter>
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
