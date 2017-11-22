import React from "react";
import { Wrapper, Star, Details } from "./styled";
import Icon from "./star.svg";

class Rating extends React.Component {
  render() {
    const rating = this.props.data;
    return (
      <Wrapper>
        {/* {rating.average} */}
        <Star src={Icon} />
        <Star src={Icon} />
        <Star src={Icon} />
        <Star src={Icon} />
        <Star src={Icon} />
        <Details>
          {rating.counter} {rating.label ? "· " + rating.label : "reviews"}
        </Details>
      </Wrapper>
    );
  }
}
export default Rating;
