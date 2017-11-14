import React from "react";
import { Wrapper, Star, Details } from "./styled";
import Icon from "./star.svg";

class Rating extends React.Component {
  render() {
    return (
      <Wrapper>
        {/* {this.props.data.stars} */}
        <Star src={Icon} />
        <Star src={Icon} />
        <Star src={Icon} />
        <Star src={Icon} />
        <Star src={Icon} />
        <Details>
          {this.props.data.counter} {this.props.data.suffix}
        </Details>
      </Wrapper>
    );
  }
}
export default Rating;
