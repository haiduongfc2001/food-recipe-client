import {
  faArrowUpZA,
  faFilter,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import ModalFilter from "../../components/homepage/ModalFilter";
import FoodRecipeCard from "../../components/homepage/FoodRecipeCard";
import {
  API_SERVICE,
  DISPLAY_PAGE_SIZE,
  NOT_FOUND_RESULT,
  NOT_FOUND_RESULT_FOR_SEARCH,
  PAGE_SIZE,
  STATUS_CODE,
} from "../../utils/Constants";
import storageInstance from "../../services/Storage";
import { SortOptions } from "../../components/Data/HomepageData";
import Loading from "../../components/homepage/Loading";
import * as APIService from "../../services/APIService";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalFilterOpen, setIsModalFilterOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(PAGE_SIZE);
  const [sortOption, setSortOption] = useState(null);

  const inputValue = storageInstance.getSessionInputValue("inputValue") ?? null;

  const [loading, setLoading] = useState(false);
  const [loadingFoodRecipeTop, setLoadingFoodRecipeTop] = useState(false);

  const [searchResult, setSearchResult] = useState(
    storageInstance.getSessionFoodSearch("foodSearch")
  );

  const [foodRecipeTop, setFoodRecipeTop] = useState([]);

  const foodCardRef = useRef(null);

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleModalFilterOpen = () => {
    setIsModalFilterOpen(true);
  };

  const handleModalFilterClose = () => {
    setIsModalFilterOpen(false);
  };

  const handleSortOptionClick = async (option) => {
    setSortOption(option.title);
    toggleDropdown();

    setLoading(true);

    const options = {
      sort: option.sort,
      by: option.by,
    };

    if (!options) return;

    const response = await APIService[API_SERVICE.SEARCH](options);

    if (response && response.status !== STATUS_CODE.UNAUTHORIZED) {
      setLoading(false);
      storageInstance.updateSessionFoodSearch(response);
      setSearchResult(response);
    }
  };

  const scrollToFoodCard = () => {
    if (foodCardRef.current) {
      foodCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fetchFoodRecipeTop = async () => {
    try {
      setLoadingFoodRecipeTop(true);
      const response = await APIService[API_SERVICE.SEARCH]({
        search: "",
      });

      if (response && response.status !== STATUS_CODE.UNAUTHORIZED) {
        setFoodRecipeTop(response.slice(0, 8));
        setLoadingFoodRecipeTop(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchFoodRecipeTop();
    scrollToFoodCard();
  }, []);

  return (
    <div className="mx-10">
      <div className="flex items-center mx-10 mt-10">
        <img
          src="https://wallpapersmug.com/download/1600x900/ebde76/delicious-pizza-food.jpg"
          alt="food"
          className="max-h-80 w-1/2 max-w-full rounded-lg rounded-tr-none rounded-bl-none rounded-br-none shadow-lg"
        />
        <img
          src="https://assets.vogue.in/photos/6103d492578ff515bee7dfba/16:9/w_3791,h_2132,c_limit/Korean%20food%20restaurants%20in%20India.jpg"
          alt="food"
          className="max-h-80 w-1/2 max-w-full rounded-lg rounded-tl-none rounded-bl-none rounded-br-none shadow-lg"
        />
      </div>

      <div
        className="flex items-center justify-evenly bg-slate-200 mx-10 py-2 rounded-lg rounded-tl-none rounded-tr-none"
        ref={inputValue ? foodCardRef : null}
      >
        <div onClick={handleModalFilterOpen}>
          <FontAwesomeIcon icon={faFilter} />
          <button className="ml-4">Bộ lọc</button>
        </div>
        <div className="flex items-center">
          <span className="mr-4">Hiển thị</span>
          <select
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
            className="bg-blue-200 rounded-lg p-2"
          >
            {DISPLAY_PAGE_SIZE.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div className=" z-10">
          <FontAwesomeIcon icon={faArrowUpZA} />
          {/* <span className="mx-4">Sắp xếp</span> */}
          <div className="relative inline-block mx-4">
            <button
              className="bg-blue-200 text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md w-40 flex items-center justify-around hover:bg-blue-300 focus:outline-none"
              onClick={toggleDropdown}
            >
              {sortOption ? sortOption : "Sắp xếp"}
              <FontAwesomeIcon
                icon={faSortDown}
                className="flex items-center"
              />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-md w-40">
                <ul className="py-2">
                  {SortOptions.map((option, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSortOptionClick(option)}
                    >
                      {option.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        {sessionStorage.getItem("foodSearch") &&
          sessionStorage.getItem("inputValue") && (
            <div className="mx-10 py-2">
              {/* <h1 className="text-left font-bold text-3xl text-gray-800 border-b-2 border-gray-500 pb-2 my-10">
            {inputValue && Object.keys(inputValue).length !== 0
              ? `Kết quả tìm kiếm của: ${inputValue}`
              : "Kết quả:"}
          </h1> */}

              {loading ? (
                <Loading />
              ) : searchResult && searchResult.length > 0 ? (
                <FoodRecipeCard
                  itemsPerPage={itemsPerPage}
                  searchResult={searchResult}
                  foodCardRef={foodCardRef}
                />
              ) : (
                <div className="text-center my-10">
                  <div className="bg-slate-200 p-8 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-red-500 mb-4">
                      {NOT_FOUND_RESULT}
                    </h1>
                    <p className="text-gray-600">
                      {NOT_FOUND_RESULT_FOR_SEARCH}
                      <span
                        role="img"
                        aria-label="Crying Face"
                        className="text-2xl ml-2"
                      >
                        😢
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

        <div className="py-2 px-10">
          <h1 className="text-left font-bold text-3xl text-gray-800 border-b-2 border-gray-500 pb-2 my-10">
            Các công thức nổi bật
          </h1>
          {loadingFoodRecipeTop && <Loading />}
          {foodRecipeTop && foodRecipeTop.length > 0 && (
            <FoodRecipeCard
              itemsPerPage={itemsPerPage}
              searchResult={foodRecipeTop}
            />
          )}
        </div>
      </div>

      {isModalFilterOpen && (
        <ModalFilter
          handleModalFilterClose={handleModalFilterClose}
          setSearchResult={setSearchResult}
          setLoading={setLoading}
        />
      )}
    </div>
  );
}

export default Homepage;
