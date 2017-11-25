import React from "react";
import { Section, H2 } from "./styled";
import Spoiler from "./Spoiler";

class Location extends React.Component {
  render() {
    return (
      <Section id="location">
        <H2>The neighborhood</H2>
        <p>Yudy & Victoria’s home is located in Armenia, Quindio, Colombia.</p>
        <p>
          We are situated in the heart of the coffee region in the Andean
          mountains in Colombia. We are in "Vereda La Pradera" neighborhood,
          near the small town of "El Caimo", 20 minutes from Armenia and 20
          minutes from the airport, by car. Close enough for comfort and easy
          access, far enough from the hustle of traffic and city noise that you
          can commune with nature. Sleep to the sound of the crickets and awaken
          to the sound of birds.
        </p>
        <Spoiler label="Read more about neighborhood">
          <p>
            The cabin sits on 5 acres, and feels remote, but it's just 12
            minutes from downtown Joshua Tree. You will travel a few miles on a
            secure, hard dirt road to get here. Enjoy the spectacular panoramic
            sunset and sunrise—as well as a blanket of stars. In the wintertime,
            you can build a bonfire too. Sleep comfortably in a queen-sized bed.
          </p>
          <p>
            The renovated interior has a cookware-outfitted kitchen and dining
            area. There is an outhouse with a dry toilet and roofless shower a
            few yards from the cabin. Wireless internet is available if you
            require a connection to the digital world. The cabin is equipped
            with air conditioning.
          </p>
        </Spoiler>
      </Section>
    );
  }
}
export default Location;
