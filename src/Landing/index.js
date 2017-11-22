import React from "react";
import Explore from "../Explore";
import Experiences from "../Experiences";
import Homes from "./Homes";
import Reservations from "../Reservations";
import Destinations from "../Destinations";
import Footer from "../Footer";

export default () => {
  return (
    <div>
      <Explore />
      <Experiences />
      <Homes />
      <Reservations />
      <Destinations />
      <Footer />
    </div>
  );
};
