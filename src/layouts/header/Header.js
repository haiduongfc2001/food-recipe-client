import {
  faPlus,
  faRightFromBracket,
  faRightToBracket,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as APIService from "../../services/APIService";
import storageInstance from "../../services/Storage";
import { API_SERVICE, STATUS_CODE } from "../../utils/Constants";
import { UserSVG } from "../../components/Data/UserSVG";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import DecodeToken from "../../routes/DecodeToken";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const inputSearchRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

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
      if (path === "/") {
        window.location.reload();
      } else {
        navigate("/");
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

  const handleNavigate = () => {
    navigate("/create-new-recipe");
  };

  const handleLogout = () => {
    storageInstance.clearLocal();
    navigate("/login");
  };

  const handleUserIconMouseEnter = () => {
    setShowLogoutButton(true);
  };

  const handleUserIconMouseLeave = (e) => {
    setTimeout(() => {
      if (
        !e.relatedTarget ||
        !e.relatedTarget.closest(".logout-button-container")
      ) {
        setShowLogoutButton(false);
      }
    }, 3000);
  };

  return (
    <header className="text-white bg-slate-200 w-full">
      <div className="container mx-10 flex items-center justify-between py-4 px-10">
        <Link to="/" className="text-3xl font-bold text-black">
          FoodRecipe
        </Link>

        <div className="flex items-center">
          <div className="ml-4 relative rounded-lg border-2 border-solid border-gray-400 focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ease-in-out">
            <input
              ref={inputSearchRef}
              type="text"
              placeholder="Tìm kiếm công thức"
              className="text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ease-in-out"
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
          {storageInstance.getLocalFoodRecipeToken() ? (
            <>
              <div className="mx-8 relative">
                <Tippy
                  content="Tạo công thức"
                  placement="top"
                  animation="scale"
                  duration={400}
                >
                  <div className="relative">
                    <div
                      className="h-9 w-9 flex items-center justify-center text-black border-2 border-black rounded-full hover:bg-slate-400 cursor-pointer"
                      onClick={handleNavigate}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                </Tippy>
              </div>
              <div
                className="flex items-center relative bg-gray-200 px-4 rounded-lg"
                onMouseEnter={handleUserIconMouseEnter}
                onMouseLeave={handleUserIconMouseLeave}
              >
                <p className="text-black font-bold mr-4 cursor-pointer relative z-10">
                  Xin chào,{" "}
                  {
                    DecodeToken(storageInstance.getLocalFoodRecipeToken())
                      .username
                  }
                </p>
                <UserSVG
                  className="w-6 h-6 cursor-pointer"
                  onMouseEnter={handleUserIconMouseEnter}
                  onMouseLeave={handleUserIconMouseLeave}
                />

                {showLogoutButton && (
                  <div className="absolute right-4 mt-[80px] bg-white rounded-lg shadow-md z-0">
                    <button
                      className="w-full flex items-center justify-center p-3 bg-blue-200 text-white rounded-md hover:bg-blue-300 focus:outline-none"
                      onClick={handleLogout}
                    >
                      <p className="text-black font-bold pr-2">Đăng xuất</p>
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        style={{ color: "#000000" }}
                      />
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="w-full flex items-center justify-center p-3 bg-blue-200 text-white rounded-md hover:bg-blue-300 focus:outline-none">
                <p className="text-black font-bold pr-2">Đăng nhập</p>
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  style={{ color: "#000000" }}
                />
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
