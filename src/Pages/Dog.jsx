import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import useDog from "../Hooks/useDog";
import InternalBanner from "../Components/InternalBanner";
import NotFound from "/Images/Homepage/ExploreDogs/not-found.jpg";
import SimilarDogs from "../Components/SimilarDogs";

const Dog = () => {
  const { id } = useParams();
  const { data: dog, isLoading, error } = useDog(id);

  return (
    <>
      <Header />
      <InternalBanner
        title={dog?.name || "Loading..."}
        textColor="#000000"
        bgColor="#faf7f2"
        isVisible={true}
      />
      <div className="dog-detail-page">
        <div className="container">
          {isLoading && <p>Loading dog...</p>}
          {error && <p>Error fetching dog: {error.message}</p>}

          {dog && (
            <div className="dog-detail">
              <div className="dog-detail-layout">
                <div className="dog-images">
                  <div className="dog-large-img-container">
                    <img
                      src={dog.photos?.[0]?.large || NotFound}
                      alt={dog.name}
                      className="dog-large-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="dog-small-img-container">
                    {dog.photos?.slice(1).map((photo, index) => (
                      <img
                        key={index}
                        src={photo?.medium || NotFound}
                        alt={`${dog.name} - small ${index}`}
                        className="dog-small-img"
                      />
                    ))}
                  </div>
                </div>

                <div className="dog-contact">
                  <div class="contact-header">
                    <h4>Ready to Go Home</h4>
                  </div>
                  <p>
                    <strong>Email:</strong> {dog.contact?.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {dog.contact?.phone || "N/A"}
                  </p>
                  <p>
                    <strong>Location:</strong> {dog.contact?.address?.city},{" "}
                    {dog.contact?.address?.state}
                  </p>
                  <a href={dog.url} target="_blank" rel="noreferrer">
                    View on Petfinder
                  </a>
                </div>
              </div>

              <div className="dog-detail-info">
                <h2>{dog.name}</h2>
                <p>
                  <strong>Age:</strong> {dog.age} • <strong>Gender:</strong>{" "}
                  {dog.gender}
                </p>
                <p>
                  <strong>Breed:</strong> {dog.breeds?.primary},{" "}
                  {dog.breeds?.secondary}
                </p>
                <p>
                  <strong>Size:</strong> {dog.size}
                </p>
                <p>
                  <strong>Coat:</strong> {dog.coat}
                </p>
                <p>
                  <strong>Description:</strong> {dog.description}
                </p>

                <div className="dog-attributes">
                  <h4>Attributes</h4>
                  <ul>
                    <li>
                      <strong>Spayed/Neutered:</strong>{" "}
                      {dog.attributes?.spayed_neutered ? "Yes" : "No"}
                    </li>
                    <li>
                      <strong>House Trained:</strong>{" "}
                      {dog.attributes?.house_trained ? "Yes" : "No"}
                    </li>
                    <li>
                      <strong>Declawed:</strong>{" "}
                      {dog.attributes?.declawed ? "Yes" : "No"}
                    </li>
                    <li>
                      <strong>Special Needs:</strong>{" "}
                      {dog.attributes?.special_needs ? "Yes" : "No"}
                    </li>
                    <li>
                      <strong>Shots Current:</strong>{" "}
                      {dog.attributes?.shots_current ? "Yes" : "No"}
                    </li>
                  </ul>
                </div>

                <div className="dog-environment">
                  <h4>Environment</h4>
                  <ul>
                    <li>
                      <strong>Good with Children:</strong>{" "}
                      {dog.environment?.children ? "Yes" : "No"}
                    </li>
                    <li>
                      <strong>Good with Dogs:</strong>{" "}
                      {dog.environment?.dogs ? "Yes" : "No"}
                    </li>
                    <li>
                      <strong>Good with Cats:</strong>{" "}
                      {dog.environment?.cats ? "Yes" : "No"}
                    </li>
                  </ul>
                </div>

                <div className="dog-tags">
                  <h4>Traits</h4>
                  <ul>
                    {dog.tags?.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {dog && (
        <SimilarDogs
          name={dog.name}
          breed={dog.breeds.primary}
          location={`${dog.contact?.address?.city}, ${dog.contact?.address?.state}`}
        />
      )}
      <Footer />
    </>
  );
};

export default Dog;
