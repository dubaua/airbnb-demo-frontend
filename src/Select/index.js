import React from "react";
import { Wrapper, Option, Arrow } from "./styled";

class Select extends React.Component {
  render() {
    return (
      <Wrapper>
        <Option>
          {this.props.option}
          <Arrow />
        </Option>
      </Wrapper>
    );
  }
}
export default Select;
