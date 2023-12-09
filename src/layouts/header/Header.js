import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as APIService from "../../services/APIService";
import storageInstance from "../../services/Storage";
import { API_SERVICE, STATUS_CODE } from "../../utils/Constants";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const api = API_SERVICE.SEARCH;

  const handleSearchChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = async (e) => {
    if (inputValue.trim() === "") return;

    e.preventDefault();
    setInputValue("");

    const response = await APIService[api]({
      search: inputValue,
    });

    if (response && response.status !== STATUS_CODE.UNAUTHORIZED) {
      storageInstance.updateSessionFoodSearch(response);
      window.location.reload();
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
      <div className="container mx-10 flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-white">
          FoodRecipe
        </Link>

        <div className="flex items-center">
          <div className="ml-4 relative">
            <input
              type="text"
              placeholder="Tìm kiếm công thức"
              className="text-gray-700 py-1 px-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
