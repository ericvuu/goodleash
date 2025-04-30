import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import useDogs from "../Hooks/useDogs";
import InternalBanner from "../Components/InternalBanner";
import NotFound from "/Images/Homepage/ExploreDogs/not-found.jpg";

const Breed = ({ city, country, state, stateCode, zip, cityState }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const breed = searchParams.get("breed") || "Akita";

  const [page, setPage] = useState(1);
  const limit = 20;

  const {
    data: dogs,
    isLoading: isLoadingDogs,
    error: dogsError,
  } = useDogs({
    breed,
    location: cityState,
    page,
    limit,
  });

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Header />
      <InternalBanner title={`Available ${breed}s`} textColor="#000000" bgColor="#faf7f2" isVisible={true} />
      <main className="breed-page">
        <div className="container">
          {isLoadingDogs && <p>Loading dogs...</p>}
          {dogsError && <p>Error fetching dogs: {dogsError.message}</p>}

          {dogs && dogs.length > 0 ? (
            <>
              <div className="dog-grid">
                {dogs.map((dog) => (
                  <div key={dog.id} className="card">
                    <img
                      src={dog?.photos?.[0]?.medium || NotFound}
                      alt={dog.name}
                      className="card-img"
                    />
                    <div className="card-info">
                      <h3 className="card-title">{dog.name}</h3>
                      <div className="card-info-bottom">
                        <div className="left">
                          <p>
                            {dog.age} • {dog.gender}
                          </p>
                          <p>{dog.breeds?.primary}</p>
                        </div>
                        <div className="right">
                          <p>
                            {dog.contact?.address?.city},{" "}
                            {dog.contact?.address?.state}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
            !isLoadingDogs && <p>No dogs found for {breed} in your area.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Breed;
