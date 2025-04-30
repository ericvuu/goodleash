import React, { useState } from "react";
import "../Styles/FindByLocation.scss";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const cities = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Brooklyn, NY",
  "Houston, TX",
  "Phoenix, AZ",
  "Manhattan, NY",
  "Philadelphia, PA",
  "San Antonio, TX",
  "Bronx, NY",
  "San Diego, CA",
  "Dallas, TX",
  "San Jose, CA",
  "Austin, TX",
  "Jacksonville, FL",
  "Columbus, OH",
  "San Francisco, CA",
  "Fort Worth, TX",
  "Indianapolis, IN",
  "Charlotte, NC",
  "Seattle, WA",
  "Denver, CO",
  "Nashville, TN",
  "Washington, DC",
  "Boston, MA",
  "El Paso, TX",
  "Detroit, MI",
  "Memphis, TN",
  "Portland, OR",
  "Oklahoma City, OK",
  "Las Vegas, NV",
  "Louisville, KY",
  "Baltimore, MD",
  "Milwaukee, WI",
  "Albuquerque, NM",
  "Tucson, AZ",
  "Fresno, CA",
  "Sacramento, CA",
  "Mesa, AZ",
  "Atlanta, GA",
  "Kansas City, MO",
  "Staten Island, NY",
  "Omaha, NE",
  "Long Beach, CA",
  "Colorado Springs, CO",
  "Raleigh, NC",
  "Miami, FL",
  "Virginia Beach, VA",
  "Oakland, CA",
  "Minneapolis, MN",
];

const FindByLocation = ({ breed }) => {
  return (
    <div className="location-section">
      <section className="state-group container">
        <h5>Find {breed}s by city</h5>
        <ul className="state-cities-list">
          {cities.map((city, idx) => (
            <li key={idx}>
              <a
                href={`/breed?breed=${encodeURIComponent(
                  breed
                )}&location=${encodeURIComponent(city)}`}
              >
                {city}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="state-group container">
        <h5>Find {breed}s by state</h5>
        <ul className="state-cities-list">
          {states.map((state, idx) => (
            <li key={idx}>
              <a
                href={`/breed?breed=${encodeURIComponent(
                  breed
                )}&location=${encodeURIComponent(state)}`}
              >
                {state}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FindByLocation;
