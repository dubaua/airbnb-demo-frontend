import React from "react";
import moment from "moment";
import { Lg, ToMd, MdOnly } from "../../UI/Media";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./datepicker_override.css";
import { Dropdown, Toggle, Content, Button, Controls } from "./styled";

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

  onCancel = () => {
    this.setState(
      {
        dates: this.props.dates
      },
      () => {
        this.onDatesChange(this.state.dates);
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
            <ToMd key="xsDaypicker">
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
            <MdOnly key="mdDaypicker">
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
            <Lg key="lgDaypicker">
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

export default Dates;
