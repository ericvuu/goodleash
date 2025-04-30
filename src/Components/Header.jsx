import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoWhite from "/Images/logo-white.svg";
import LogoBlack from "/Images/logo-black.svg";

const Header = () => {
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const isHome = location.pathname === "/";

    const handleResize = () => {
      if (!isHome) {
        setIsScrolled(true);
        return;
      }

      setIsScrolled(window.innerWidth > 768 && window.scrollY > 0);
    };

    const handleScroll = () => {
      if (!isHome) return;

      if (window.innerWidth > 768) {
        setIsScrolled(window.scrollY > 0);
        setLastScrollY(window.scrollY);
      } else {
        setIsScrolled(false);
      }
    };

    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const isHome = location.pathname === "/";
  const showLogoBlack = isScrolled || !isHome;

  return (
    <header className={`header ${isScrolled || !isHome ? "scrolled" : "top"}`}>
      <nav className="navbar">
        <Link className="header-brand" to="/">
          <img
            alt="Goodleash Logo"
            className="logo"
            src={showLogoBlack ? LogoBlack : LogoWhite}
          />
        </Link>

        <button
          aria-controls="navbarToggler"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          onClick={toggleNavbar}
          type="button"
        >
          <span
            className="navbar-toggler-icon"
            style={{ color: showLogoBlack ? "#000000" : "#ffffff" }}
          ></span>
        </button>

        <div
          className={`navbar-collapse ${isOpen ? "open" : "collapse"}`}
          id="navbarToggler"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/organizations" onClick={() => setIsOpen(false)}>
                Organizations
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
