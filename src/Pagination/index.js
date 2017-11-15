import React from "react";
import { Wrapper, Steps, Step } from "./styled";
// import prev from "./prev.svg";
import next from "./next.svg";

class Rating extends React.Component {
  render() {
    return (
      <Wrapper>
        <Steps>
          {/* <Step nav>
          <img src={prev} alt="prev" />
        </Step> */}
          <Step current>1</Step>
          <Step>2</Step>
          <Step>3</Step>
          <Step>..</Step>
          <Step>17</Step>
          <Step nav>
            <img src={next} alt="next" />
          </Step>
        </Steps>
      </Wrapper>
    );
  }
}
export default Rating;
