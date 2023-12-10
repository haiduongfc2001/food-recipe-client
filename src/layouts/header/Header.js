import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as APIService from "../../services/APIService";
import storageInstance from "../../services/Storage";
import { API_SERVICE, STATUS_CODE } from "../../utils/Constants";
import { UserSVG } from "../../components/Data/UserSVG";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const inputSearchRef = useRef();

  useEffect(() => {
    inputSearchRef.current.focus();
  }, []);

  const api = API_SERVICE.SEARCH;

  const handleSearchChange = (e) => {
    if (e.target.value.trim() === "") return;
    setInputValue(e.target.value);
  };

  const handleSearch = async (e) => {
    if (inputValue.trim() === "") return;

    e.preventDefault();

    storageInstance.updateSessionInputValue(inputValue.trim());

    const response = await APIService[api]({
      search: inputValue.trim(),
    });

    if (response && response.status !== STATUS_CODE.UNAUTHORIZED) {
      setInputValue("");
      storageInstance.updateSessionFoodSearch(response);
      if (window.location.pathname === "/") {
        window.location.reload();
      } else {
        window.location.href = "/";
      }
    } else {
      alert("Server error!");
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-10  flex items-center justify-between py-4 px-10">
        <Link to="/" className="text-2xl font-bold text-white">
          FoodRecipe
        </Link>

        <div className="flex items-center">
          <div className="ml-4 relative">
            <input
              ref={inputSearchRef}
              type="text"
              placeholder="Tìm kiếm công thức"
              className="text-gray-700 py-2 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ease-in-out"
              value={inputValue}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black transition-colors duration-300 ease-in-out"
              onClick={handleSearch}
            />
          </div>
        </div>

        <div className="flex items-center pr-4">
          <UserSVG />
        </div>
      </div>
    </header>
  );
};

export default Header;
