import React from "react";
import { Wrapper, Toggle, Dropdown, Content, Controls, Button } from "./styled";

class Filter extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  cancel = () => {
    console.log("track cancel / outside");
    this.setState({ isOpen: false });
  };

  apply = () => {
    console.log("track apply");
    this.setState({ isOpen: false });
  };

  //TODO close other
  render() {
    return (
      <Wrapper onlydesktop={this.props.onlydesktop}>
        <Toggle onClick={this.toggle} active={this.state.isOpen}>
          {this.state.isOpen && this.props.activeLabel
            ? this.props.activeLabel
            : this.props.label}
        </Toggle>
        {this.state.isOpen && (
          <Dropdown eventTypes="click" handleClickOutside={this.cancel}>
            <Content>{this.props.children}</Content>
            <Controls>
              <Button muted onClick={this.cancel}>
                Cancel
              </Button>
              <Button onClick={this.apply}>Apply</Button>
            </Controls>
          </Dropdown>
        )}
      </Wrapper>
    );
  }
}
export default Filter;
