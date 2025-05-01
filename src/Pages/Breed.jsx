import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import useDogs from "../Hooks/useDogs";
import InternalBanner from "../Components/InternalBanner";
import DogFilters from "../Components/DogFilter";
import DogCard from "../Components/DogCard";
import FindByLocation from "../Components/FindByLocation";

const Breed = ({ city, country, state, stateCode, zip, cityState }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const breed = searchParams.get("breed") || "";
  const queryLocationFromURL = searchParams.get("location");

  const defaultLocation = queryLocationFromURL || zip;

  const [filters, setFilters] = useState({
    gender: "",
    color: "",
    queryLocation: defaultLocation,
  });

  const [page, setPage] = useState(1);
  const limit = 20;

  const {
    data: dogs,
    isLoading: isLoadingDogs,
    error: dogsError,
  } = useDogs({
    breed,
    location: filters.queryLocation,
    page,
    limit,
    gender: filters.gender,
    color: filters.color,
  });


  useEffect(() => {
    setPage(1);
  }, [filters]);

  useEffect(() => {
    if (!filters.queryLocation && !queryLocationFromURL) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        queryLocation: zip,
      }));
    }
  }, [zip, queryLocationFromURL, filters.queryLocation]);

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Header />
      <InternalBanner
        title={`Available ${breed}s`}
        textColor="#000000"
        bgColor="#faf7f2"
        isVisible={true}
      />
      <div className="breed-page">
        <div className="container">
          <DogFilters filters={filters} setFilters={setFilters} />
          {isLoadingDogs && <p>Loading dogs...</p>}
          {dogsError && <p>Error fetching dogs: {dogsError.message}</p>}

          {dogs && dogs.length > 0 ? (
            <>
              <div className="dog-grid">
                {dogs.map((dog) => (
                  <DogCard key={dog.id} dog={dog} />
                ))}
              </div>

              <div className="pagination-controls">
                <button
                  onClick={handlePrevPage}
                  disabled={page === 1}
                  className="pagination-button"
                >
                  Previous
                </button>
                <span className="page-indicator">Page {page}</span>
                <button
                  onClick={handleNextPage}
                  disabled={dogs.length < limit}
                  className="pagination-button"
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            !isLoadingDogs && (
              <p>
                No dogs found for {breed} in{" "}
                <strong>{filters.queryLocation}</strong>.
              </p>
            )
          )}
        </div>
      </div>
      <FindByLocation breed={breed} />
      <Footer />
    </>
  );
};

export default Breed;
