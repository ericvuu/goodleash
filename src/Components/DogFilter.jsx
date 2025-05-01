import React, { useState, useEffect } from "react";
import Female from "/Images/female.svg";
import Male from "/Images/male.svg";
import Location from "/Images/location.svg";
import Chevron from "/Images/chevron.svg";
import "../Styles/DogFilter.scss";

const colors = [
  "Apricot / Beige",
  "Bicolor",
  "Black",
  "Brindle",
  "Brown / Chocolate",
  "Golden",
  "Gray / Blue / Silver",
  "Harlequin",
  "Merle (Blue)",
  "Merle (Red)",
  "Red / Chestnut / Orange",
  "Sable",
  "Tricolor (Brown, Black, & White)",
  "White / Cream",
  "Yellow / Tan / Blond / Fawn",
];

const DogFilters = ({
  filters = { gender: "", color: "", queryLocation: "" },
  setFilters,
}) => {
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [colorDropdownOpen, setColorDropdownOpen] = useState(false);
  const [locationInput, setLocationInput] = useState(filters.queryLocation || "");


  useEffect(() => {
    setLocationInput(filters.queryLocation || "");
  }, [filters.queryLocation]);

  const toggleGender = (gender) => {
    setFilters((prev) => ({
      ...prev,
      gender: prev.gender === gender ? "" : gender,
    }));
  };

  const toggleColor = (color) => {
    setFilters((prev) => {
      const currentColors = prev.color ? prev.color.split(",") : [];
      const isSelected = currentColors.includes(color);
      const updatedColors = isSelected
        ? currentColors.filter((c) => c !== color)
        : [...currentColors, color];

      return {
        ...prev,
        color: updatedColors.join(","),
      };
    });
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    if (value.length <= 5) {
      setLocationInput(value);
    }
  };

  const handleLocationSubmit = () => {
    setFilters((prev) => ({
      ...prev,
      queryLocation: locationInput,
    }));
    setLocationDropdownOpen(false);
  };

  const handleLocationDropdownClick = (e) => {
    e.stopPropagation();
  };

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen((prev) => !prev);
  };

  return (
    <div className="dog-filters">
      <button
        type="button"
        className="filter-button"
        onClick={toggleLocationDropdown}
      >
        <span className="filter-content">
          <img src={Location} alt="Location" className="icon" />
          <span>{filters.queryLocation || "Location"}</span>
          <img src={Chevron} alt="Chevron" className="icon chevron" />
        </span>

        {locationDropdownOpen && (
          <div
            className="location-dropdown-wrapper"
            onClick={handleLocationDropdownClick}
          >
            <p>Filter results by location</p>
            <p>We'll show you dogs near you.</p>
            <input
              type="text"
              value={locationInput}
              onChange={handleLocationChange}
              placeholder="ZIP Code"
              className="location-input"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleLocationSubmit();
                }
              }}
            />
            <button
              type="button"
              className="filter-button clear-button"
              onClick={() => {
                setFilters({ gender: "", color: "", queryLocation: "" });
                setLocationInput("");
                setLocationDropdownOpen(false);
                setColorDropdownOpen(false);
              }}
            >
              Clear Filters
            </button>
            <button
              type="button"
              onClick={handleLocationSubmit}
              className="submit-location-btn"
            >
              Show Options
            </button>
          </div>
        )}
      </button>

      <button
        type="button"
        className={`filter-button ${
          filters.gender === "female" ? "active" : ""
        }`}
        onClick={() => toggleGender("female")}
      >
        <span className="filter-content">
          <img src={Female} alt="Female" className="icon" />
          <span>Female</span>
        </span>
      </button>

      <button
        type="button"
        className={`filter-button ${filters.gender === "male" ? "active" : ""}`}
        onClick={() => toggleGender("male")}
      >
        <span className="filter-content">
          <img src={Male} alt="Male" className="icon" />
          <span>Male</span>
        </span>
      </button>

      <div className="color-dropdown-wrapper">
        <button
          type="button"
          className={`filter-button ${filters.color ? "active" : ""}`}
          onClick={() => setColorDropdownOpen((prev) => !prev)}
        >
          <span className="filter-content">
            <span>{filters.color || "Color"}</span>
            <img src={Chevron} alt="Chevron" className="icon chevron" />
          </span>
        </button>
        {colorDropdownOpen && (
          <div className="color-dropdown">
            <ul>
              {colors.map((color) => (
                <li key={color} className="dropdown-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={filters.color.split(",").includes(color)}
                      onChange={() => toggleColor(color)}
                    />
                    {color}
                  </label>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="filter-button clear-button"
              onClick={() => {
                setFilters({ gender: "", color: "", queryLocation: "" });
                setLocationInput("");
                setLocationDropdownOpen(false);
                setColorDropdownOpen(false);
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DogFilters;
