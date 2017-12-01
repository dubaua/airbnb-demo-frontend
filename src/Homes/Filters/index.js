import React from "react";
import { Container } from "../../CommonStyles";
import { Wrapper, Overlay } from "./styled";
import Dates from "./Dates";
import Guests from "./Guests";
import RoomType from "./RoomType";
import Price from "./Price";
import InstantBook from "./InstantBook";
import More from "./More";

class Filters extends React.Component {
  state = {
    currentFilter: null,
    dates: {
      startDate: null,
      endDate: null
    },
    guests: {
      adults: 1,
      children: 0,
      infants: 0
    },
    roomType: {
      entireHome: false,
      personalRoom: false,
      sharedRoom: false
    },
    priceRange: {
      min: 10,
      max: 1000,
      values: [100, 700]
    },
    instantBook: false,
    roomsAndBeds: {
      bedrooms: 0,
      beds: 0,
      bathrooms: 0
    },
    superHost: false,
    amenities: [
      {
        title: "Heating",
        value: false
      },
      {
        title: "Kitchen",
        value: false
      },
      {
        title: "TV",
        value: false
      },
      {
        title: "Internet",
        value: false
      },
      {
        title: "Anything",
        value: false
      },
      {
        title: "One more hidden amenity",
        value: false
      }
    ],
    facilities: [
      {
        title: "Elevator",
        value: false
      },
      {
        title: "Parking",
        value: false
      },
      {
        title: "Pool",
        value: false
      },
      {
        title: "Wheelchair",
        value: false
      },
      {
        title: "Anything",
        value: false
      },
      {
        title: "One more hidden facilitiy",
        value: false
      }
    ]
  };

  toggleFilter = filterId => {
    this.setState({
      currentFilter: this.state.currentFilter === filterId ? null : filterId
    });
  };

  applyDates = dates => {
    this.setState({
      dates: dates,
      currentFilter: null
    });
  };

  applyGuests = guests => {
    this.setState({
      guests: guests,
      currentFilter: null
    });
  };

  applyRoomTypes = roomType => {
    this.setState({
      roomType: roomType,
      currentFilter: null
    });
  };

  applyPrice = priceRange => {
    this.setState({
      priceRange: priceRange,
      currentFilter: null
    });
  };

  applyInstantBook = instantBook => {
    this.setState({
      instantBook: instantBook,
      currentFilter: null
    });
  };

  applyMore = (roomsAndBeds, superHost, amenities, facilities) => {
    console.log(roomsAndBeds, superHost, amenities, facilities);
    this.setState({
      roomsAndBeds: roomsAndBeds,
      superHost: superHost,
      amenities: amenities,
      facilities: facilities,
      currentFilter: null
    });
  };

  render() {
    return [
      <Wrapper key="wrapper">
        <Container>
          <Dates
            dates={this.state.dates}
            onApply={this.applyDates}
            filterId="dates"
            currentFilter={this.state.currentFilter}
            toggleFilter={this.toggleFilter}
          />
          <Guests
            guests={this.state.guests}
            onApply={this.applyGuests}
            filterId="guests"
            currentFilter={this.state.currentFilter}
            toggleFilter={this.toggleFilter}
          />
          <RoomType
            roomType={this.state.roomType}
            onApply={this.applyRoomTypes}
            filterId="rooms"
            currentFilter={this.state.currentFilter}
            toggleFilter={this.toggleFilter}
          />
          <Price
            priceRange={this.state.priceRange}
            onApply={this.applyPrice}
            filterId="price"
            currentFilter={this.state.currentFilter}
            toggleFilter={this.toggleFilter}
          />
          <InstantBook
            instantBook={this.state.instantBook}
            onApply={this.applyInstantBook}
            filterId="instantBook"
            currentFilter={this.state.currentFilter}
            toggleFilter={this.toggleFilter}
          />
          <More
            roomsAndBeds={this.state.roomsAndBeds}
            superHost={this.state.superHost}
            amenities={this.state.amenities}
            facilities={this.state.facilities}
            onApply={this.applyMore}
            filterId="more"
            currentFilter={this.state.currentFilter}
            toggleFilter={this.toggleFilter}
          />
        </Container>
      </Wrapper>,
      this.state.currentFilter !== null && (
        <Overlay
          key="overlay"
          onClick={() => {
            this.toggleFilter(null);
          }}
        />
      )
    ];
  }
}

export default Filters;
