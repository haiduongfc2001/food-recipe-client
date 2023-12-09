import {
  faArrowUpZA,
  faFilter,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import ModalFilter from "../../components/homepage/ModalFilter";
import FoodRecipeCard from "../../components/homepage/FoodRecipeCard";
import { DISPLAY_PAGE_SIZE, PAGE_SIZE } from "../../utils/Constants";
import storageInstance from "../../services/Storage";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalFilterOpen, setIsModalFilterOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(PAGE_SIZE);
  const [sortOption, setSortOption] = useState(null);

  const [searchResult, setSearchResult] = useState(
    storageInstance.getSessionFoodSearch("foodSearch")
  );

  const foodCardRef = useRef(null);

  const [ingredients, setIngredients] = useState([]);
  const [time, setTime] = useState(null);
  const [rate, setRate] = useState(null);

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

  const handleSortOptionClick = (option) => {
    setSortOption(option);
    toggleDropdown();
  };

  const scrollToFoodCard = () => {
    if (foodCardRef.current) {
      foodCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToFoodCard();
  }, []);

  return (
    <div className="mx-10">
      <div>
        <img
          src="https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?b=1&s=612x612&w=0&k=20&c=BON5S0uDJeCe66N9klUEw5xKSGVnFhcL8stPLczQd_8="
          alt="food"
          className="mx-auto mt-10 mb-0 w-4/5 h-3/5"
        />
      </div>
      {searchResult && searchResult.length > 0 && (
        <div className="flex items-center justify-evenly bg-slate-300 w-4/5 mx-auto py-2">
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
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSortOptionClick("Ngày cập nhật")}
                    >
                      Ngày cập nhật
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSortOptionClick("Đánh giá")}
                    >
                      Đánh giá
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mx-10">
        {/* <div>Kết quả tìm kiếm của: {inputValue}</div> */}
        <div ref={foodCardRef}>
          {searchResult && searchResult.length > 0 ? (
            <FoodRecipeCard
              itemsPerPage={itemsPerPage}
              searchResult={searchResult}
            />
          ) : (
            <h1 className="text-center text-red-500 font-bold text-3xl my-10">
              Không tìm thấy kết quả{" "}
              <span role="img" aria-label="Crying Face" className="text-3xl">
                😢
              </span>
            </h1>
          )}
        </div>
      </div>

      {isModalFilterOpen && (
        <ModalFilter handleModalFilterClose={handleModalFilterClose} />
      )}
    </div>
  );
}

export default Homepage;
