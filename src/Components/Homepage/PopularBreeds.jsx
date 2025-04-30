import React from "react";
import "../../Styles/PopularBreeds.scss";

const breeds = [
  "Akita",
  "Aussiedoodle",
  "Australian Cattle Dog",
  "Australian Shepherd",
  "Basenji",
  "Basset Hound",
  "Beagle",
  "Beauceron",
  "Belgian Shepherd / Malinois",
  "Bernese Mountain Dog",
  "Bichon Frise",
  "Border Collie",
  "Boston Terrier",
  "Boxer",
  "Bulldog",
  "Bull Terrier",
  "Cane Corso",
  "Cardigan Welsh Corgi",
  "Cavalier King Charles Spaniel",
  "Chihuahua",
  "Cocker Spaniel",
  "Dachshund",
  "Dalmatian",
  "Doberman Pinscher",
  "Dogo Argentino",
  "English Springer Spaniel",
  "French Bulldog",
  "German Shepherd",
  "German Shorthaired Pointer",
  "Giant Schnauzer",
  "Golden Retriever",
  "Great Dane",
  "Great Pyrenees",
  "Havanese",
  "Irish Wolfhound",
  "Italian Greyhound",
  "Jack Russell Terrier",
  "Labrador Retriever",
  "Maltese",
  "Miniature Pinscher",
  "Miniature Schnauzer",
  "Nova Scotia Duck Tolling Retriever",
  "Pembroke Welsh Corgi",
  "Pit Bull Terrier",
  "Pomeranian",
  "Poodle",
  "Pug",
  "Rottweiler",
  "Samoyed",
  "Shiba Inu",
  "Shih Tzu",
  "Siberian Husky",
  "West Highland White Terrier / Westie",
  "Yorkshire Terrier",
];

const PopularBreeds = () => {
  return (
    <div className="popular-breeds">
      <div className="breed-links-group container">
        <h5>Learn more about our popular breeds</h5>
        <ul className="breeds-grid">
          {breeds.map((breed, index) => (
            <li key={index}>
              <a href={`/breed?breed=${breed}`}>
                {breed}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularBreeds;
