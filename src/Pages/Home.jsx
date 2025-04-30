import React from "react";
import Header from "../Components/Header";
import HomeHero from "../Components/Homepage/HomeHero";
import HomeForm from "../Components/Homepage/HomeForm";
import ExploreDogs from "../Components/Homepage/ExploreDogs";
import FeaturedSuccess from "../Components/Homepage/Success";
import PopularBreeds from "../Components/Homepage/PopularBreeds";
import HomeOrganizationsSlider from "../Components/Homepage/HomeOrganizationsSlider";
import Footer from "../Components/Footer";

const Home = ({ city, country, state, stateCode, zip, cityState }) => {

  return (
    <>
      <Header />
      <HomeHero />
      <HomeForm />
      <ExploreDogs />
      <FeaturedSuccess />
      <HomeOrganizationsSlider />
      <PopularBreeds />
      <Footer />
    </>
  );
};

export default Home;
