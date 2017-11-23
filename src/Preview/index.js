import React from "react";
import { Wrapper, Image } from "./styled";

class Preview extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image src={this.props.src} />
        {this.props.children}
      </Wrapper>
    );
  }
}
export default Preview;
