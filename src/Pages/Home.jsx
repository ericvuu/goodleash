import React from "react";
import Header from "../Components/Header";
import HomeHero from "../Components/Homepage/HomeHero";
import HomeForm from "../Components/Homepage/HomeForm";
import ExploreDogs from "../Components/Homepage/ExploreDogs";
import PopularBreeds from "../Components/Homepage/PopularBreeds";
import Footer from "../Components/Footer";

const Home = ({ city, country, state, stateCode, zip, cityState }) => {

  return (
    <>
      <Header />
      <HomeHero />
      <HomeForm />
      <ExploreDogs />
      <PopularBreeds/>
      <Footer />
    </>
  );
};

export default Home;
