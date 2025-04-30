import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/HomeOrganizationsSlider.scss";
import { Link } from "react-router-dom";

const organizationCities = [
  {
    name: "Los Angeles",
    image: "/Images/Homepage/Organizations/los-angeles.jpg",
    location: "Los Angeles, CA",
  },
  {
    name: "New York",
    image: "/Images/Homepage/Organizations/new-york.jpg",
    location: "New York, NY",
  },
  {
    name: "San Francisco",
    image: "/Images/Homepage/Organizations/san-francisco.jpg",
    location: "San Francisco, CA",
  },
  {
    name: "Washington DC",
    image: "/Images/Homepage/Organizations/washington-dc.jpg",
    location: "Washington DC",
  },
  {
    name: "Austin",
    image: "/Images/Homepage/Organizations/austin.jpg",
    location: "Austin, TX",
  },
  {
    name: "Chicago",
    image: "/Images/Homepage/Organizations/chicago.jpg",
    location: "Chicago, IL",
  },
  {
    name: "Philadelphia",
    image: "/Images/Homepage/Organizations/philadelphia.jpg",
    location: "Philadelphia, PA",
  },
  {
    name: "Houston",
    image: "/Images/Homepage/Organizations/houston.jpg",
    location: "Houston, TX",
  },
  {
    name: "Seattle",
    image: "/Images/Homepage/Organizations/seattle.jpg",
    location: "Seattle, WA",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const HomeOrganizationsSlider = () => {
  return (
    <div className="home-organizations">
      <div className="container">
        <h3 className="title">Explore organizations & rescues near you</h3>
        <Slider {...settings}>
          {organizationCities.map((city) => (
            <Link
              key={city.name}
              to={`/organizations?location=${encodeURIComponent(
                city.location
              )}&distance=100`}
              className="slide"
            >
              <img src={city.image} alt={city.name} className="slide-img" />
              <div className="overlay">
                <p className="city-name">{city.name}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeOrganizationsSlider;
