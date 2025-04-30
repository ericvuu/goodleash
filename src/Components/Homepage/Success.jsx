import React from "react";
import Luna from "/Images/Homepage/luna.jpg";
import "../../Styles/FeaturedSuccess.scss";

const FeaturedSuccess = () => {
  return (
    <section className="featured-success">
      <div className="container">
        <div className="success-content">
          <div className="image-wrapper">
            <img src={Luna} alt="Adopted pet Luna" className="success-image" />
            <div className="image-overlay" />
          </div>
          <div className="success-text">
            <h3>From Shelter to Forever Home</h3>
            <p>
              Meet <strong>Luna</strong>, a gentle and spirited Border Collie
              mix who spent over three months in a crowded shelter, waiting for
              someone to see the love in her eyes. With the help of our
              dedicated rescue network, Luna was matched with a family who
              instantly fell in love with her playful energy and loyal heart.
            </p>
            <br />
            <p>
              Today, Luna enjoys long hikes with her humans, daily cuddles on
              the couch, and more belly rubs than she could have imagined. Her
              journey reminds us that every animal deserves a second chance—and
              that love, when given the chance, can transform not only the life
              of a pet, but the lives of everyone they touch.
            </p>
            <br />
            <p>
              Stories like Luna’s are why we do what we do. Each successful
              adoption fuels our mission to connect more animals with the
              families they’re meant to be with. Thank you to our volunteers,
              fosters, and supporters for making these stories possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSuccess;
