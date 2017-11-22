import React from "react";
import { Wrapper, Button, Content } from "./styled";

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.doParentToggle = this.doParentToggle.bind(this);
  }

  doParentToggle = () => {
    this.setState({
      isOpen: false
    });
  };

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      // dunno how to improve line below
      <Wrapper onlydesktop={this.props.onlydesktop}>
        <Button onClick={this.toggleOpen} active={this.state.isOpen}>
          {this.state.isOpen && this.props.activeLabel
            ? this.props.activeLabel
            : this.props.label}
        </Button>
        {this.state.isOpen && <Content>{this.props.children}</Content>}
      </Wrapper>
    );
  }
}
export default Dropdown;
