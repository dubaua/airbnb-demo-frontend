import React from "react";
import styled from "styled-components";
import { Container as PContainer } from "../CommonStyles";

import Button from "./Button";
import xsShare from "./xsshare.svg";
import share from "./share.svg";
import xsLike from "./xslike.svg";
import like from "./like.svg";
import photo from "./photo.png";

const PhotoContainer = styled(PContainer)`
  position: relative;
  height: 290px;
  @media only screen and (min-width: 768px) {
    height: 360px;
  }
  @media only screen and (min-width: 992px) {
    height: 440px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 290px;
  @media only screen and (min-width: 768px) {
    height: 360px;
  }
  @media only screen and (min-width: 992px) {
    height: 440px;
  }
  background: url(${photo}) center center no-repeat;
  background-size: auto 100%;
`;

const Actions = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
  display: flex;
  @media only screen and (min-width: 768px) {
    top: 16px;
  }
`;

const View = styled.div`
  position: absolute;
  right: 5px;
  bottom: 10px;
  @media only screen and (min-width: 768px) {
    right: auto;
    left: 5px;
    bottom: 24px;
  }
`;
class Photoes extends React.Component {
  render() {
    return (
      <Wrapper>
        <PhotoContainer>
          <Actions>
            <Button xsIcon={xsShare} icon={share}>
              Share
            </Button>
            <Button xsIcon={xsLike} icon={like}>
              Save
            </Button>
          </Actions>
          <View>
            <Button>View Photos</Button>
          </View>
        </PhotoContainer>
      </Wrapper>
    );
  }
}
export default Photoes;
