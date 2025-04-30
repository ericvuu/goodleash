import React from "react";
import { Link } from "react-router-dom";
import "../Styles/DogCard.scss";
import NotFound from "/Images/Homepage/ExploreDogs/not-found.jpg";

const DogCard = ({ dog }) => {
  if (!dog) return null;

  return (
    <div key={dog.id} className="card">
      <Link to={`/dog/${dog.id}`}>
        <img
          src={dog?.photos?.[0]?.medium || NotFound}
          alt={dog.name}
          className="card-img"
        />
        <div className="card-info">
          <div className="card-tile-wrap">
            <h3 className="card-title">{dog.name}</h3>
            <div className="status">
              <p>{dog?.status || ""}</p>
            </div>
          </div>
          <div className="card-info-bottom">
            <div className="left">
              <p>
                {dog.age} • {dog.gender}
              </p>
              <p>{dog.breeds?.primary}</p>
            </div>
            <div className="right">
              <p>
                {dog.contact?.address?.city}, {dog.contact?.address?.state}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DogCard;
