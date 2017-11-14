import React from "react";
import { Wrapper, Star, Details } from "./styled";
import Icon from "./star.svg";

class Rating extends React.Component {
  render() {
    return (
      <Wrapper>
        {/* {this.props.stars} */}
        <Star src={Icon} />
        <Star src={Icon} />
        <Star src={Icon} />
        <Star src={Icon} />
        <Star src={Icon} />
        <Details>
          {this.props.counter} {this.props.suffix}
        </Details>
      </Wrapper>
    );
  }
}
export default Rating;
