import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "/Images/search-icon.svg";
import useBreeds from "../Hooks/useBreeds";

const Form = ({ uPath, uSearch = "", placeholder = "Enter breed" }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState(uSearch);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const { data: breeds = [], isLoading } = useBreeds();

  useEffect(() => {
    setSearch(uSearch);
  }, [uSearch]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setShowDropdown(true);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    navigate(
      `/${uPath}${search ? `?breed=${encodeURIComponent(search)}` : ""}`
    );
    setShowDropdown(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchClick(e);
    }
  };

  const handleBreedClick = (breed) => {
    setSearch(breed);
    setShowDropdown(false);
  };

  const handleFocus = () => {
    setShowDropdown(true);
  };

  const handleClickOutside = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      !inputRef.current.contains(e.target)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredBreeds = search.trim()
    ? breeds.filter((b) => b.name.toLowerCase().includes(search.toLowerCase()))
    : breeds;

  return (
    <div className="form-search">
      <div className="form-row">
        <div className="form-col form-col-search">
          <div className="input-container" style={{ position: "relative" }}>
            <input
              ref={inputRef}
              className="form-input-field"
              type="text"
              value={search}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              onFocus={handleFocus}
              placeholder={placeholder}
              autoComplete="off"
            />
            <button className="form-search-btn" onClick={handleSearchClick}>
              <img
                src={searchIcon}
                alt="Search Icon"
                className="form-search-icon"
              />
            </button>

            {showDropdown && filteredBreeds.length > 0 && (
              <ul
                className="autocomplete-dropdown"
                ref={dropdownRef}
              >
                {filteredBreeds.map((breed) => (
                  <li
                    key={breed.name}
                    onMouseDown={() => handleBreedClick(breed.name)}
                    className="autocomplete-item"
                  >
                    {breed.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
