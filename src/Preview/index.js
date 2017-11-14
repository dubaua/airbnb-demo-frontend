import React from "react";
import { Wrapper, Image } from "./styled";

class Preview extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image src={this.props.src} />
      </Wrapper>
    );
  }
}
export default Preview;
