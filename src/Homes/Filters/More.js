import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Dropdown, Toggle, Button, Controls } from "./styled";
import SlideToggle from "../../UI/SlideToggle";
import Spoiler from "../../UI/Spoiler";
import Counter from "../../UI/Counter";
import Checkbox from "../../UI/Checkbox";
import styled from "styled-components";

const Content = styled.div`
  position: fixed;
  top: 139px;
  bottom: 0;
  left: 0;
  background: white;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 2;
  width: calc(50vw + (992px - 16px)/6);
`;

const Filters = styled.div`
  font-weight: lighter;
  padding: 32px 16px 16px 32px;
`;

const Filter = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Hr = styled.hr`
  border: none;
  margin: 32px 0 16px;
  border-bottom: 1px solid #e4e4e4;
`;

const Label = styled.div`
  font-size: 18px;
  width: 300px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: normal;
  margin: 24px 0;
`;

const Info = styled.div`
  font-size: 16px;
  & p {
    margin: 4px 0;
  }
  & a {
    color: #0f7276;
    text-decoration: none;
  }
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  font-size: 18px;
  margin-left: 12px;
`;

class Price extends React.Component {
  state = {
    roomsAndBeds: this.props.roomsAndBeds,
    superHost: this.props.superHost,
    amenities: this.props.amenities,
    facilities: this.props.facilities
  };

  onChange = (value, resource, key) => {
    this.setState(prevState => ({
      [resource]: {
        ...prevState[resource],
        [key]: value
      }
    }));
  };

  onArrayChange = (value, resource, index) => {
    const newArray = this.state[resource].map((v, i) => ({
      title: v.title,
      value: i === index ? value : v.value
    }));
    this.setState(prevState => ({
      ...prevState,
      [resource]: newArray
    }));
  };

  onApply = () => {
    this.props.onApply(
      this.state.roomsAndBeds,
      this.state.superHost,
      this.state.amenities,
      this.state.facilities
    );
  };

  onCancel = () => {
    this.setState(
      {
        roomsAndBeds: this.props.roomsAndBeds,
        superHost: this.props.superHost,
        amenities: this.props.amenities,
        facilities: this.props.facilities
      },
      () => {
        this.props.toggleFilter();
      }
    );
  };

  onToggle = () => {
    this.props.toggleFilter(this.props.filterId);
  };

  render() {
    return (
      <Dropdown>
        <Toggle
          onClick={this.onToggle}
          active={this.props.currentFilter === this.props.filterId}
        >
          More
        </Toggle>
        {this.props.currentFilter === this.props.filterId && (
          <Content>
            <Filters>
              <Title> Rooms and beds </Title>
              <Filter>
                <Label> Bedrooms </Label>
                <Counter
                  resource={"roomsAndBeds"}
                  _key={"bedrooms"}
                  value={this.state.roomsAndBeds.bedrooms}
                  min={0}
                  max={10}
                  onChange={this.onChange}
                />
              </Filter>
              <Filter>
                <Label> Beds </Label>
                <Counter
                  resource={"roomsAndBeds"}
                  _key={"beds"}
                  value={this.state.roomsAndBeds.beds}
                  min={0}
                  max={10}
                  onChange={this.onChange}
                />
              </Filter>
              <Filter>
                <Label> Bathrooms </Label>
                <Counter
                  resource={"roomsAndBeds"}
                  _key={"bathrooms"}
                  value={this.state.roomsAndBeds.bathrooms}
                  min={0}
                  max={10}
                  onChange={this.onChange}
                />
              </Filter>
              <Hr />
              <Title> More options </Title>
              <Filter>
                <Info>
                  <Label> Superhost </Label>
                  <p> Stay with recognized hosts. </p>
                  <p>
                    <a href="#"> Learn more </a>
                  </p>
                </Info>
                <SlideToggle
                  value={this.state.superHost}
                  onChange={v =>
                    this.setState({
                      instantBook: v
                    })
                  }
                />
              </Filter>
              <Hr />
              <Title> Amenities </Title>
              <Row>
                {this.state.amenities.slice(0, 4).map((amenitiy, index) => (
                  <Col xs={6} key={index.toString()}>
                    <Filter>
                      <Checkbox
                        forId={"amenities" + index.toString()}
                        resource={"amenities"}
                        index={index}
                        value={amenitiy.value}
                        onChange={this.onArrayChange}
                      />
                      <CheckboxLabel htmlFor={"amenities" + index.toString()}>
                        {amenitiy.title}
                      </CheckboxLabel>
                    </Filter>
                  </Col>
                ))}
              </Row>
              <Spoiler label="Show all amenities">
                <Row>
                  {this.state.amenities
                    .slice(4, this.state.amenities.length)
                    .map((amenitiy, index) => (
                      <Col xs={6} key={index.toString()}>
                        <Filter>
                          <Checkbox
                            forId={"amenities" + index.toString()}
                            resource={"amenities"}
                            index={index}
                            value={amenitiy.value}
                            onChange={this.onArrayChange}
                          />
                          <CheckboxLabel
                            htmlFor={"amenities" + index.toString()}
                          >
                            {amenitiy.title}
                          </CheckboxLabel>
                        </Filter>
                      </Col>
                    ))}
                </Row>
              </Spoiler>
              <Hr />
              <Title> Facilities </Title>
              <Row>
                {this.state.facilities.slice(0, 4).map((facility, index) => (
                  <Col xs={6} key={index.toString()}>
                    <Filter>
                      <Checkbox
                        forId={"facilities" + index.toString()}
                        resource={"facilities"}
                        index={index}
                        value={facility.value}
                        onChange={this.onArrayChange}
                      />
                      forId={"facilities" + index.toString()}
                      <CheckboxLabel htmlFor={"amenities" + index.toString()}>
                        {facility.title}
                      </CheckboxLabel>
                    </Filter>
                  </Col>
                ))}
              </Row>
              <Spoiler label="Show all facilities">
                <Row>
                  {this.state.facilities
                    .slice(4, this.state.facilities.length)
                    .map((facility, index) => (
                      <Col xs={6} key={index.toString()}>
                        <Filter>
                          <Checkbox
                            forId={"facilities" + index.toString()}
                            resource={"facilities"}
                            index={index}
                            value={facility.value}
                            onChange={this.onArrayChange}
                          />
                          forId={"facilities" + index.toString()}
                          <CheckboxLabel
                            htmlFor={"amenities" + index.toString()}
                          >
                            {facility.title}
                          </CheckboxLabel>
                        </Filter>
                      </Col>
                    ))}
                </Row>
              </Spoiler>
              <Hr />
            </Filters>
            <Controls right>
              <Button onClick={this.onCancel}>Cancel</Button>
              <Button onClick={this.onApply} primary>
                See homes
              </Button>
            </Controls>
          </Content>
        )}
      </Dropdown>
    );
  }
}

export default Price;
