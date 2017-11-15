import { Row } from "react-flexbox-grid";
import styled, { css } from "styled-components";
import ArrowRight from "./arrow-right.svg";
import ArrowNext from "./arrow-next.svg";
import ArrowPrev from "./arrow-prev.svg";

export const Section = styled.section`margin: 48px 0;`;

export const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-right: 8px;
  padding-left: 8px;
  @media only screen and (min-width: 576px) {
    width: 560px;
    max-width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 752px;
    max-width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: 976px;
    max-width: 100%;
  }
  ${props =>
    props.scroll &&
    css`
      overflow-x: auto;
      overflow-y: hidden;
      @media only screen and (min-width: 992px) {
        overflow-x: inherit;
      }
    `};
`;

export const Slider = styled(Row)`
  flex-wrap: nowrap !important;
  position: relative;
`;

export const Card = styled.a`
  color: inherit;
  display: block;
  overflow: hidden;
  text-decoration: none;
  ${props =>
    props.stock &&
    css`
      margin: 24px 0;
      @media only screen and (min-width: 768px) {
        margin-bottom: 40px;
      }
    `};
`;

export const SectionHead = styled.div`padding-bottom: 24px;`;

export const TitleH2 = styled.h2`
  line-height: 34px;
  font-size: 24px;
  margin: 0;
  @media only screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const TitleH3 = styled.h3`
  font-size: 13px;
  margin: 4px 0;
  ${props =>
    props.cropped &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    margin: 8px 0;
  }
  ${props =>
    props.accent &&
    css`
      font-size: 14px;
      @media only screen and (min-width: 768px) {
        font-size: 18px;
      }
    `};
`;

export const Muted = styled.small`
  font-weight: 200;
  font-size: 1em;
`;

export const About = styled.p`
  font-size: 15px;
  margin: 4px 0;
  font-weight: 200;
  @media only screen and (min-width: 768px) {
    margin: 8px 0;
  }
  ${props =>
    props.accent &&
    css`
      font-size: 12px;
      @media only screen and (min-width: 768px) {
        font-size: 18px;
      }
    `};
`;

export const Label = styled.p`
  font-size: 8px;
  margin: 8px 0 4px;
  line-height: 1;
  font-weight: bold;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
    font-size: 10px;
    margin: 12px 0 8px;
  }
`;

export const SeeAll = styled.a`
  color: #383838;
  display: block;
  font-size: 12px;
  text-align: right;
  text-decoration: none;
  white-space: nowrap;
  margin-left: -8px;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 4px;
  }
  &:after {
    background: url(${ArrowRight}) no-repeat right center;
    content: "";
    width: 6px;
    display: inline-block;
    height: 11px;
    margin-left: 6px;
  }
`;

export const Link = styled.a`
  color: #383838;
  text-decoration: none;
  font-size: 12px;
  line-height: 24px;
  display: inline-block;
  padding: 0 8px;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Next = styled.div`
  width: 40px;
  height: 40px;
  background: url(${ArrowNext}) no-repeat center center #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  position: absolute;
  top: 42%;
  right: 0;
  transform: translate(50%, -50%);
  display: none;
  @media only screen and (min-width: 992px) {
    display: inherit;
  }
`;

export const Prev = styled.div`
  width: 40px;
  height: 40px;
  background: url(${ArrowPrev}) no-repeat center center #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  position: absolute;
  top: 42%;
  left: 0;
  transform: translate(-50%, -50%);
  display: none;
  @media only screen and (min-width: 992px) {
    display: inherit;
    display: none;
  }
`;

export const Button = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  padding: 7px 16px;
  &:not(:first-child) {
    margin-left: 12px;
  }
`;
