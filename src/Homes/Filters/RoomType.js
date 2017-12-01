import React from "react";
import { Dropdown, Toggle, Content, Button, Controls } from "./styled";
import Checkbox from "../../UI/Checkbox";
import styled from "styled-components";

const Filters = styled.div`
  padding: 24px 16px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
const Label = styled.label`
  cursor: pointer;
  margin-left: 12px;
  width: 180px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: lighter;
`;
const Subtitle = styled.div`
  font-size: 12px;
  font-weight: lighter;
  margin-top: 4px;
`;
const Icon = styled.div``;

class RoomType extends React.Component {
  state = {
    roomType: this.props.roomType,
    label: "Room type"
  };

  onRoomTypeChange = roomType => {
    const count = Object.values(roomType).filter(v => v === true).length;
    console.log(count);
    const label = count ? `s: ${count}` : "";
    this.setState({
      label: "Room type" + label
    });
  };

  onEntireHomeChange = newValue => {
    this.setState(
      prevState => ({
        roomType: { ...prevState.roomType, entireHome: newValue }
      }),
      () => {
        this.onRoomTypeChange(this.state.roomType);
      }
    );
  };

  onPersonalRoomChange = newValue => {
    this.setState(
      prevState => ({
        roomType: { ...prevState.roomType, personalRoom: newValue }
      }),
      () => {
        this.onRoomTypeChange(this.state.roomType);
      }
    );
  };

  onSharedRoomChange = newValue => {
    this.setState(
      prevState => ({
        roomType: { ...prevState.roomType, sharedRoom: newValue }
      }),
      () => {
        this.onRoomTypeChange(this.state.roomType);
      }
    );
  };

  onApply = () => {
    this.props.onApply(this.state.roomType);
  };

  onCancel = () => {
    this.setState(
      {
        roomType: this.props.roomType
      },
      () => {
        this.onRoomTypeChange(this.state.roomType);
        this.props.toggleFilter(null);
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
          {this.state.label}
        </Toggle>
        {this.props.currentFilter === this.props.filterId && (
          <Content>
            <Filters>
              <Filter>
                <Checkbox
                  forId="entireHome"
                  value={this.props.roomType.entireHome}
                  onChange={this.onEntireHomeChange}
                />
                <Label htmlFor="entireHome">
                  <Title>Entire home</Title>
                  <Subtitle>Have a place to yourself</Subtitle>
                </Label>
                <Icon>
                  <svg width="32" height="32">
                    <path d="M30,31 L31.5,31 C31.7761,31 32,31.2239 32,31.5 C32,31.7761 31.7761,32 31.5,32 L25,32 L25,21.676 C25,20.752 24.327,20 23.5,20 C22.673,20 22,20.752 22,21.676 L22,32 L0.5,32 C0.223877,32 0,31.7761 0,31.5 C0,31.2239 0.223877,31 0.5,31 L3,31 L3,27 L1,27 C0.849609,26.9998 0.707275,26.9319 0.612427,26.8152 C0.517578,26.6985 0.480347,26.5452 0.510986,26.3979 L3.01099,14.3979 C3.05823,14.1655 3.2627,13.9983 3.5,13.9983 C3.7373,13.9983 3.94177,14.1655 3.98901,14.3979 L6.48901,26.3989 C6.51929,26.5461 6.48193,26.699 6.38721,26.8157 C6.29236,26.9321 6.15015,26.9998 6,27 L4,27 L4,31 L9,31 L9,6.02295 L19.5,0.00390625 L25,3.15698 L25,0.5 C25,0.223877 25.2239,0 25.5,0 C25.7761,0 26,0.223877 26,0.5 L26,3.72998 L30,6.02295 L30,31 Z M1.61499,26 L5.38501,26 L3.5,16.9519 L1.61499,26 Z M26,31 L29,31 L29,6.60205 L19.5,1.15601 L10,6.60205 L10,31 L21,31 L21,21.676 C21,20.2 22.121,19 23.5,19 C24.879,19 26,20.2 26,21.676 L26,31 Z M25.25,16 C25.6642,16 26,15.6643 26,15.25 L26,10.5061 C26.0006,9.12402 24.882,8.00269 23.5,8 C22.118,8.00269 20.9994,9.12402 21,10.5061 L21,15.251 C21.006,15.6626 21.3384,15.9946 21.75,16 L25.25,16 Z M22,10.5061 C22,9.67505 22.673,9 23.5,9 C24.327,9 25,9.67505 25,10.5061 L25,15 L22,15 L22,10.5061 Z M15.5,19 C16.8817,19.0034 18,20.1243 18,21.5061 L18,26.25 C18,26.6643 17.6642,27 17.25,27 L13.75,27 C13.3384,26.9946 13.006,26.6626 13,26.251 L13,21.5061 C13,20.1243 14.1183,19.0034 15.5,19 Z M14,21.5061 L14,26 L17,26 L17,21.5061 C17,20.676 16.327,20 15.5,20 C14.673,20 14,20.676 14,21.5061 Z M15.5,8 C16.8817,8.00342 18,9.12427 18,10.5061 L18,15.25 C18,15.6643 17.6642,16 17.25,16 L13.75,16 C13.3384,15.9946 13.006,15.6626 13,15.251 L13,10.5061 C13,9.12427 14.1183,8.00342 15.5,8 Z M14,15 L17,15 L17,10.5061 C17,9.67505 16.327,9 15.5,9 C14.673,9 14,9.67505 14,10.5061 L14,15 Z" />
                  </svg>
                </Icon>
              </Filter>
              <Filter>
                <Checkbox
                  forId="personalRoom"
                  value={this.props.roomType.personalRoom}
                  onChange={this.onPersonalRoomChange}
                />
                <Label htmlFor="personalRoom">
                  <Title>Private room</Title>
                  <Subtitle>
                    Have your own room and share some common spaces
                  </Subtitle>
                </Label>
                <Icon>
                  <svg width="32" height="32">
                    <path d="M31.5,32 C31.7761,32 32,31.7761 32,31.5 C32,31.2239 31.7761,31 31.5,31 L23,31 L23,7 C23,3.13989 19.859,0 16,0 C12.141,0 9,3.13989 9,7 L9,8.5 C9,8.77612 9.22388,9 9.5,9 C9.65833,9 9.79956,8.92627 9.89111,8.81152 C9.95923,8.72607 10,8.61768 10,8.5 L10,7 C10,3.69092 12.691,1 16,1 C19.309,1 22,3.69092 22,7 L22,31 L10,31 L10,23.5 C10,23.2239 9.77612,23 9.5,23 C9.22388,23 9,23.2239 9,23.5 L9,31 L0.5,31 C0.223877,31 0,31.2239 0,31.5 C0,31.7761 0.223877,32 0.5,32 L31.5,32 Z M14,15.5 L14,21.5 C14,21.7761 13.7761,22 13.5,22 L5.5,22 C5.22388,22 5,21.7761 5,21.5 L5,15.5 C5,15.2239 5.22388,15 5.5,15 L7,15 L7,13.5 C7,12.1221 8.12097,11 9.5,11 C10.879,11 12,12.1221 12,13.5 L12,15 L13.5,15 C13.7761,15 14,15.2239 14,15.5 Z M11,13.5 C11,12.6731 10.327,12 9.5,12 C8.67297,12 8,12.6731 8,13.5 L8,15 L11,15 L11,13.5 Z M13,21 L13,16 L6,16 L6,21 L13,21 Z M19,18 C19.5522,18 20,17.5522 20,17 C20,16.4478 19.5522,16 19,16 C18.4478,16 18,16.4478 18,17 C18,17.5522 18.4478,18 19,18 Z" />
                  </svg>
                </Icon>
              </Filter>
              <Filter>
                <Checkbox
                  forId="sharedRoom"
                  value={this.props.roomType.sharedRoom}
                  onChange={this.onSharedRoomChange}
                />
                <Label htmlFor="sharedRoom">
                  <Title>Shared room</Title>
                  <Subtitle>
                    Stay in a shared space, like a common room
                  </Subtitle>
                </Label>
                <Icon>
                  <svg width="33" height="32">
                    <path d="M30.4903,1.89502 C30.4401,1.66504 30.2367,1.50073 30.0013,1.5 L27.0013,1.5 L27.0013,0.5 C27.0013,0.223877 26.7774,0 26.5013,0 C26.3439,0 26.2035,0.0725098 26.1119,0.186279 C26.0824,0.222656 26.058,0.263184 26.0397,0.307129 C26.0149,0.366455 26.0013,0.431641 26.0013,0.5 L26.0013,1.5 L23.0013,1.5 C22.897,1.5 22.7991,1.53223 22.7179,1.58813 C22.6684,1.62207 22.625,1.66504 22.5904,1.71484 C22.575,1.73706 22.5613,1.7605 22.5496,1.78516 L22.5402,1.80591 C22.5284,1.83423 22.519,1.86401 22.5122,1.89502 L21.0122,8.89502 C20.9911,8.99097 20.9992,9.08984 21.0334,9.17969 C21.0519,9.22827 21.0782,9.27417 21.1116,9.31543 C21.2071,9.43311 21.3507,9.50122 21.5022,9.5 L26.0013,9.5 L26.0013,30.5 L24.5013,30.5 C24.2251,30.5 24.0013,30.7239 24.0013,31 C24.0013,31.2761 24.2251,31.5 24.5013,31.5 L28.5013,31.5 C28.7774,31.5 29.0013,31.2761 29.0013,31 C29.0013,30.7239 28.7774,30.5 28.5013,30.5 L27.0013,30.5 L27.0013,9.5 L31.5013,9.5 C31.591,9.5 31.6778,9.47583 31.7533,9.43164 C31.805,9.40161 31.8515,9.36206 31.8901,9.31421 C31.9017,9.2998 31.9124,9.28491 31.9222,9.26953 C31.9327,9.25317 31.9422,9.23633 31.9506,9.21899 C31.9591,9.20142 31.9667,9.18335 31.9731,9.16479 C31.9787,9.14868 31.9834,9.13232 31.9873,9.11572 C32.0043,9.04419 32.0053,8.96875 31.9893,8.89502 L30.4903,1.89502 L30.4903,1.89502 Z M22.1193,8.5 L23.4053,2.5 L29.5973,2.5 L30.8833,8.5 L22.1193,8.5 L22.1193,8.5 Z M18.0014,30.5 L20.5484,30.5 L20.9983,21.948 C21.0019,21.8828 21.0013,21.8184 20.9966,21.7551 C20.9888,21.6497 20.9699,21.5471 20.9403,21.449 C20.9102,21.3489 20.8688,21.2532 20.8167,21.1636 C20.7657,21.0757 20.7044,20.9937 20.6333,20.9189 C20.4682,20.7441 20.2603,20.6206 20.028,20.5547 C19.9002,20.5186 19.7649,20.5 19.6254,20.5 L18.0014,20.5 L18.0014,30.5 L18.0014,30.5 Z M5.00138,26.5 L17.0014,26.5 L17.0014,24.5 L5.00138,24.5 L5.00138,26.5 L5.00138,26.5 Z M1.45426,30.5 L4.00138,30.5 L4.00138,20.5 L2.37736,20.5 C1.99772,20.4937 1.63261,20.6453 1.3693,20.9189 C1.10966,21.1963 0.977456,21.5691 1.00431,21.948 L1.45426,30.5 L1.45426,30.5 Z M18.0014,16.5029 L18.0014,19.5 L19.6253,19.5 C20.2799,19.491 20.9085,19.7561 21.359,20.231 C21.61,20.4956 21.793,20.812 21.8982,21.1533 C21.982,21.4246 22.0166,21.7117 21.9974,22.001 L21.4964,31.5 L17.0014,31.5 L17.0014,27.5 L5.00138,27.5 L5.00138,31.5 L0.506265,31.5 L0.00528835,22.001 C-0.038657,21.3477 0.192788,20.7058 0.64335,20.2307 C1.09391,19.7556 1.72257,19.4907 2.37736,19.5 L4.00138,19.5 L4.00138,16.5029 C4.00102,15.7065 4.3173,14.9424 4.88053,14.3792 C5.44376,13.8159 6.2078,13.4998 7.00431,13.5 L14.9983,13.5 C15.7948,13.4998 16.5589,13.8159 17.1221,14.3792 C17.6853,14.9424 18.0016,15.7065 18.0014,16.5029 Z M5.00138,16.5029 L5.00138,16.5029 L5.00138,23.5 L17.0014,23.5 L17.0014,16.5029 C17.0014,15.3979 16.1023,14.5 14.9983,14.5 L7.00443,14.5 C5.89933,14.5 5.00138,15.3979 5.00138,16.5029 Z" />
                  </svg>
                </Icon>
              </Filter>
            </Filters>
            <Controls>
              <Button onClick={this.onCancel}>Cancel</Button>
              <Button onClick={this.onApply}>Apply</Button>
            </Controls>
          </Content>
        )}
      </Dropdown>
    );
  }
}

export default RoomType;
