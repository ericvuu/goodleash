import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "/Images/Homepage/ExploreDogs/not-found.jpg";

export const lifestyleCategories = [
  {
    title: "Urban Living",
    description:
      "Compact, adaptable dogs that thrive in apartments and city life.",
    breeds: [
      "French Bulldog",
      "Boston Terrier",
      "Chihuahua",
      "Brussels Griffon",
    ],
  },
  {
    title: "Adventure Buddies",
    description:
      "Energetic breeds that love hiking, running, and outdoor excursions.",
    breeds: [
      "Border Collie",
      "Vizsla",
      "German Shorthaired Pointer",
      "Siberian Husky",
    ],
  },
  {
    title: "Laid-Back Companions",
    description: "Chill breeds for a slow-paced, cozy lifestyle.",
    breeds: ["Basset Hound", "Great Dane", "English Bulldog", "Greyhound"],
  },
  {
    title: "First-Time Dog Owners",
    description: "Friendly, low-maintenance breeds great for new pet parents.",
    breeds: ["Beagle", "Boxer", "Papillon", "Maltese"],
  },
];

const breedImages = {
  "French Bulldog": "/Images/Homepage/ExploreDogs/french-bulldog.jpg",
  "Boston Terrier": "/Images/Homepage/ExploreDogs/boston-terrier.jpg",
  Chihuahua: "/Images/Homepage/ExploreDogs/chihuahua.jpg",
  "Brussels Griffon": "/Images/Homepage/ExploreDogs/brussels-griffon.jpg",
  "Border Collie": "/Images/Homepage/ExploreDogs/border-collie.jpg",
  Vizsla: "/Images/Homepage/ExploreDogs/vizsla.jpg",
  "German Shorthaired Pointer": "/Images/Homepage/ExploreDogs/gsp.jpg",
  "Siberian Husky": "/Images/Homepage/ExploreDogs/siberian-husky.jpg",
  "Basset Hound": "/Images/Homepage/ExploreDogs/basset-hound.jpg",
  "Great Dane": "/Images/Homepage/ExploreDogs/great-dane.jpg",
  "English Bulldog": "/Images/Homepage/ExploreDogs/bulldog.jpg",
  Greyhound: "/Images/Homepage/ExploreDogs/greyhound.jpg",
  Beagle: "/Images/Homepage/ExploreDogs/beagle.jpg",
  Boxer: "/Images/Homepage/ExploreDogs/boxer.jpg",
  Papillon: "/Images/Homepage/ExploreDogs/papillon.jpg",
  Maltese: "/Images/Homepage/ExploreDogs/maltese.jpg",
};

const DogCard = ({ breed, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/breed/?breed=${encodeURIComponent(breed)}`);
  };

  return (
    <div
      className="card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      title={`View more about ${breed}`}
      aria-label={`View more about ${breed}`}
    >
      <img
        src={image || NotFound}
        onError={(e) => (e.target.src = NotFound)}
        alt={breed}
        className="card-img"
      />
      <h3 className="card-title">{breed}</h3>
    </div>
  );
};


const ExploreDogs = () => {
  return (
    <div className="explore-dogs">
      <div className="container">
        <h2 className="section-title">A friend for your lifestyle</h2>
        {lifestyleCategories.map((lifestyle) => (
          <section className="lifestyle" key={lifestyle.title}>
            <h3 className="lifestyle-title">{lifestyle.title}</h3>
            <p className="lifestyle-desc">{lifestyle.description}</p>
            <div className="card-row">
              {lifestyle.breeds.map((breed) => (
                <DogCard key={breed} breed={breed} image={breedImages[breed]} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ExploreDogs;
