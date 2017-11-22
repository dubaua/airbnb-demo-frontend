import React from "react";
import moment from "moment";
import omit from "lodash/omit";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./datepicker_override.css";
import styled from "styled-components";

// example from https://github.com/airbnb/react-dates/blob/master/examples/DayPickerRangeControllerWrapper.jsx

const XsDatepicker = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const MdDatepicker = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: inherit;
    margin: 0 -22px;
  }
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

const LgDatepicker = styled.div`
  display: none;
  @media only screen and (min-width: 992px) {
    display: inherit;
    margin: 0 -22px;
  }
`;

class Datepicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: props.autoFocusEndDate ? "endDate" : "startDate",
      startDate: props.initialStartDate,
      endDate: props.initialEndDate
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    console.log({ startDate, endDate });
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    const props = omit(this.props, [
      "autoFocus",
      "autoFocusEndDate",
      "initialStartDate",
      "initialEndDate"
    ]);
    return (
      <div>
        <XsDatepicker>
          <DayPickerRangeController
            {...props}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
            isDayBlocked={day => day.isBefore(moment(), "day")}
            numberOfMonths={1}
            orientation="vertical"
            hideKeyboardShortcutsPanel
          />
        </XsDatepicker>
        <MdDatepicker>
          <DayPickerRangeController
            {...props}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
            isDayBlocked={day => day.isBefore(moment(), "day")}
            numberOfMonths={1}
            hideKeyboardShortcutsPanel
          />
        </MdDatepicker>
        <LgDatepicker>
          <DayPickerRangeController
            {...props}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
            isDayBlocked={day => day.isBefore(moment(), "day")}
            numberOfMonths={2}
            hideKeyboardShortcutsPanel
          />
        </LgDatepicker>
      </div>
    );
  }
}

export default Datepicker;
