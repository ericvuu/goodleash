
import { Link} from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/Images/logo-white.svg";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`header ${isHidden ? "hidden" : ""}`}>
      <Link className="header-brand" to="/">
        <img alt="Goodleash Logo" className="logo" src={Logo} />
      </Link>
    </nav>
  );
};

export default Header;
