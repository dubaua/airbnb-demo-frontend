import React from "react";
import styled from "styled-components";

import photo from "./photo.jpg";

const Wrapper = styled.div`
  position: relative;
  height: 290px;
  @media only screen and (min-width: 768px) {
    height: 360px;
  }
  @media only screen and (min-width: 992px) {
    height: 440px;
  }
  @media only screen and (min-width: 1200px) {
    height: 702px;
  }
  background: url(${photo}) center center no-repeat;
  background-size: cover;
`;

const Actions = styled.div`
  position: absolute;
  right: 24px;
  top: 10px;
  display: flex;
  @media only screen and (min-width: 768px) {
    top: 16px;
  }
`;

const View = styled.div`
  position: absolute;
  right: 24px;
  bottom: 10px;
  @media only screen and (min-width: 768px) {
    right: auto;
    left: 24px;
    bottom: 24px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background: ${props => (props.noicon ? "white" : "transparent")};
  border: none;
  font-family: inherit;
  font-size: 14px;
  font-weight: ${props => (props.noicon ? "bold" : null)};
  padding: ${props => (props.noicon ? "11px 16px" : "5px")};
  cursor: pointer;
  & span {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    background: white;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    padding: 11px 16px;
    &:not(:first-child) {
      margin-left: 16px;
    }
    & span {
      display: inline-block;
      margin-left: 12px;
    }
  }
`;

const ShareIcon = styled.div`
  width: 24px;
  line-height: 0;
  & path {
    fill: white;
  }
  @media only screen and (min-width: 768px) {
    width: 16px;
    & path {
      fill: #767676;
    }
  }
`;

const Share = () => {
  return (
    <ShareIcon>
      <svg
        viewBox="0 0 24 24"
        role="presentation"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M22.19 8.498h-3.135a.806.806 0 0 0-.81.798c0 .44.363.798.81.798h2.325v12.309H2.62V10.095h3.109c.446 0 .81-.359.81-.799a.806.806 0 0 0-.81-.798H1.81a.806.806 0 0 0-.81.798v13.906c0 .44.364.798.81.798h20.38c.446 0 .81-.358.81-.798V9.296a.806.806 0 0 0-.81-.798zM8.081 4.679c.185 0 .36-.06.505-.175l2.009-1.584.595-.469v13.79c0 .44.363.799.81.799.446 0 .81-.359.81-.798V2.452l.594.468 2.01 1.584a.8.8 0 0 0 .504.175.808.808 0 0 0 .633-.3.792.792 0 0 0-.126-1.121l-3.92-3.09a.42.42 0 0 0-.07-.037l-.068-.033-.012-.006-.05-.03A.764.764 0 0 0 12 0a.81.81 0 0 0-.296.056l-.01.007-.061.035-.068.033a.42.42 0 0 0-.071.037l-3.92 3.09a.789.789 0 0 0-.126 1.122c.155.19.386.3.633.3z" />
      </svg>
    </ShareIcon>
  );
};

const SaveIcon = styled.div`
  width: 24px;
  line-height: 0;
  & path {
    fill: ${props => (props.active ? "red" : "none")};
    stroke: ${props => (props.active ? "none" : "white")};
  }
  @media only screen and (min-width: 768px) {
    width: 16px;
    & path {
      stroke: ${props => (props.active ? "none" : "#767676")};
    }
  }
`;

class SaveButton extends React.Component {
  state = {
    isSaved: false,
    label: "Save"
  };

  handleClick = () => {
    this.setState({
      isSaved: !this.state.isSaved,
      label: this.state.isSaved ? "Save" : "Saved"
    });
  };
  render() {
    return (
      <Button onClick={this.handleClick}>
        <SaveIcon active={this.state.isSaved}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            role="presentation"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M11.99675 1.22485c-.148 0-.2985.00869318-.449.0260795-.57.0669887-1.144.2623295-1.704.5809095-.615.34875-1.205.828921-1.844 1.501361-.64-.67295-1.229-1.152611-1.8435-1.501873-.56-.318068-1.134-.5134088-1.705-.5803975-.14873-.0173081-.29831-.02601514-.448-.0260795-.9415 0-3.628.786988-3.628 4.2842 0 4.02035 6.119 8.3526 7.3465 9.18.16853.1148.38797.1148.5565 0 1.227-.8274 7.3465-5.15965 7.3465-9.18 0-3.497723-2.687-4.2842-3.628-4.2842z" />
          </svg>
        </SaveIcon>
        <span>{this.state.label}</span>
      </Button>
    );
  }
}

class Gallery extends React.Component {
  render() {
    return (
      <Wrapper>
        <Actions>
          <Button>
            <Share />
            <span>Share</span>
          </Button>
          <SaveButton />
        </Actions>
        <View>
          <Button noicon>View Photos</Button>
        </View>
      </Wrapper>
    );
  }
}
export default Gallery;
