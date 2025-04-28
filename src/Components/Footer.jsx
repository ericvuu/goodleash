import React from "react";
import Logo from "../assets/Images/logo-white.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="column logo-column">
            <p>
              <img className="logo" src={Logo} alt="goodleash logo - footer" />
            </p>
            <p>
              Powered by&nbsp;
              <a
                href="https://www.petfinder.com/developers/v2/docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Petfinder API
              </a>
            </p>
          </div>
          <div className="column info-column">
            <ul>
              <li>
                <a href="">Our Organization</a>
              </li>
              <li>
                <a href="">Our Mission</a>
              </li>
              <li>
                <a href="">Non-discrimination</a>
              </li>
            </ul>
          </div>

          <div className="column text-column">
            <p>
              Connecting loving families with adoptable dogs nationwide. Learn
              more about adoption and fostering opportunities through your local
              shelters and rescues.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
