import React from "react";
import useDogs from "../Hooks/useDogs";
import DogCard from "../Components/DogCard";

const SimilarDogs = ({ name, breed, location }) => {
  const {
    data: dogs,
    isLoading: isLoadingDogs,
    error: dogsError,
  } = useDogs({ breed, location, limit: 3 });

  return (
    <div className="similar-dogs">
      <div className="container">
        <h2 className="section-title">Similar dogs to {name}</h2>

        {isLoadingDogs && <p>Loading similar dogs...</p>}

        {dogsError && <p>Error fetching dogs: {dogsError.message}</p>}

        {(!dogs || dogs.length === 0) && <p>No similar dogs found</p>}

        <div className="card-grid">
          {dogs?.map((dog) => (
            <DogCard key={dog.id} dog={dog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarDogs;
