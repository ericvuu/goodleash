import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Images/logo-white.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="column logo-column">
            <p>
              <img className="logo" src={Logo} alt="Goodleash logo - footer" />
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

          <div className="column links-column">
            <Link to="/organization">Our Organization</Link>
            <Link to="/mission">Our Mission</Link>
            <Link to="/non-discrimination">Non-discrimination</Link>
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
