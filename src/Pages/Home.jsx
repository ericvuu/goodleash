import React from "react";
import HomeHero from "../Components/Homepage/HomeHero";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import useDogs from "../Hooks/useDogs";

const Home = ({ city, country, state, stateCode, zip }) => {

  const location = city && state ? `${city}, ${state}` : "New York, NY";

  // const {
  //   data: dogs,
  //   isLoading: isLoadingDogs,
  //   error: dogsError,
  // } = useDogs({
  //   breed: "Akita",
  //   location: location,
  //   page: 1,
  //   limit: 20,
  // });

  // if (isLoadingDogs) console.log("Loading dogs...");
  // if (dogsError) console.error("Error fetching dogs:", dogsError);
  // if (dogs) console.log("Fetched dogs:", dogs);

  return (
    <>
      <Header />
      <HomeHero />
      <Footer />
    </>
  );
};

export default Home;
