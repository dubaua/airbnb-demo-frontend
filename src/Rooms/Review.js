import React from "react";
import styled from "styled-components";
import flag from "./flag.svg";
import Preview from "../Preview";

export const Wrapper = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #e4e4e4;
`;

export const Head = styled.div`
  display: flex;
  margin-bottom: 16px;
  position: relative;
`;

export const Userpic = styled.div`
  min-width: 48px;
  margin-right: 16px;
`;
export const Details = styled.div`
  flex-grow: 1;
`;
export const Name = styled.h3`
  font-size: 20px;
  margin: 0;
  font-weight: normal;
`;
export const Date = styled.time`
  display: block;
  font-size: 16px;
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
  color: #0f7276;
  cursor: pointer;
  font: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
`;

export const Flag = styled(Button)`
  background: url(${flag}) center center no-repeat;
  width: 16px;
  height: 16px;
`;

class Review extends React.Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const review = this.props.data;
    const cropped = review.text.substring(0, 300) + "…";

    return (
      <Wrapper>
        <Head>
          <Userpic>
            <Preview src={review.imageUrl} />
          </Userpic>
          <Details>
            <Name>{review.name}</Name>
            <Date>{review.date}</Date>
          </Details>
          <Flag />
        </Head>
        {review.text.length >= 300
          ? this.state.isOpen ? review.text : cropped
          : review.text}
        {review.text.length >= 300 && (
          <Button onClick={this.handleClick}>
            {this.state.isOpen ? "Hide" : "Read more"}
          </Button>
        )}
      </Wrapper>
    );
  }
}
export default Review;