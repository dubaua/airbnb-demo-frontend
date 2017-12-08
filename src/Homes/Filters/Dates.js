import React from "react";
import moment from "moment";
import { Md, Lg, ToMd, MdOnly } from "../../UI/Media";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./datepicker_override.css";
import {
  Dropdown,
  Toggle,
  Header,
  Cross,
  Reset,
  Footer,
  Content,
  Button,
  Controls
} from "./styled";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Filters = styled.div`
  flex-grow: 1;
`;

class Dates extends React.Component {
  state = {
    focusedInput: "startDate",
    dates: this.props.dates,
    label: "Dates"
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({
      dates: {
        startDate,
        endDate
      }
    });
    const checkIn = startDate ? startDate.format("MMM Do") : "Check in";
    const checkOut = endDate ? endDate.format("MMM Do") : "Check out";
    const label =
      this.props.currentFilter === this.props.filterId || startDate || endDate
        ? checkIn + " — " + checkOut
        : "Dates";
    this.setState({ label: label });
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  };

  onApply = () => {
    this.props.onApply(this.state.dates);
  };

  onReset = () => {
    this.setState(
      {
        dates: this.props.dates
      },
      () => {
        this.onDatesChange(this.state.dates);
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
              <ToMd>
                <DayPickerRangeController
                  onDatesChange={this.onDatesChange}
                  onFocusChange={this.onFocusChange}
                  focusedInput={this.state.focusedInput}
                  startDate={this.state.dates.startDate}
                  endDate={this.state.dates.endDate}
                  isDayBlocked={day => day.isBefore(moment(), "day")}
                  numberOfMonths={1}
                  orientation="vertical"
                  hideKeyboardShortcutsPanel
                />
              </ToMd>
              <MdOnly>
                <DayPickerRangeController
                  onDatesChange={this.onDatesChange}
                  onFocusChange={this.onFocusChange}
                  focusedInput={this.state.focusedInput}
                  startDate={this.state.dates.startDate}
                  endDate={this.state.dates.endDate}
                  isDayBlocked={day => day.isBefore(moment(), "day")}
                  numberOfMonths={1}
                  hideKeyboardShortcutsPanel
                />
              </MdOnly>
              <Lg>
                <DayPickerRangeController
                  onDatesChange={this.onDatesChange}
                  onFocusChange={this.onFocusChange}
                  focusedInput={this.state.focusedInput}
                  startDate={this.state.dates.startDate}
                  endDate={this.state.dates.endDate}
                  isDayBlocked={day => day.isBefore(moment(), "day")}
                  numberOfMonths={2}
                  hideKeyboardShortcutsPanel
                />
              </Lg>
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

export default Dates;
