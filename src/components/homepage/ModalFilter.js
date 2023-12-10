import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Ingredients, CookingTime, Ratings } from "../Data/HomepageData";
import { useState } from "react";
import * as APIService from "../../services/APIService";
import { API_SERVICE, STATUS_CODE } from "../../utils/Constants";
import storageInstance from "../../services/Storage";
import "../../components/homepage/HomepageStyle.scss";

function ModalFilter({ handleModalFilterClose, setSearchResult, serLoading }) {
  const [checkedItems, setCheckedItems] = useState({
    ingredients: [],
    cooking_time: null,
    max_rating: null,
  });

  const api = API_SERVICE.SEARCH;

  const handleCheckboxChange = (group, value) => {
    const isChecked = checkedItems[group].includes(value);

    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [group]: isChecked
        ? prevCheckedItems[group].filter((item) => item !== value)
        : [...prevCheckedItems[group], value],
    }));
  };

  const handleRadioChange = (group, value) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [group]: value,
    }));
  };

  const handleFilter = async (e) => {
    e.preventDefault();

    if (
      !checkedItems.ingredients.length &&
      !checkedItems.cooking_time &&
      !checkedItems.max_rating
    )
      return;

    serLoading(true);

    handleModalFilterClose();

    // Object.entries(checkedItems): chuyển đổi đối tượng checkedItems thành  môt mảng các căp [key, value]
    // .filter: lọc các cặp [key, value] với điều kiện value !== null
    // Object.fromEntries: chuyển đổi mảng các cặp [key, value] đã được lọc thành 1 Object mới
    const nonEmptyCheckedItems = Object.fromEntries(
      Object.entries(checkedItems).filter(([key, value]) => {
        return value !== null && !(Array.isArray(value) && value.length === 0);
      })
    );

    const response = await APIService[api](nonEmptyCheckedItems);

    if (response && response.status !== STATUS_CODE.UNAUTHORIZED) {
      serLoading(false);
      storageInstance.updateSessionFoodSearch(response);
      setSearchResult(response);
    } else {
      alert("Server error!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center bg-black bg-opacity-50">
      <div className="related bg-white max-w-screen-md mx-auto rounded-lg shadow-lg w-4/5">
        <div className="flex items-start justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Filter</h2>
          <button
            className="text-gray-500 hover:text-red-500 focus:outline-none text-2xl "
            onClick={handleModalFilterClose}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>

        <div className="px-10 py-6">
          {/* Nguyên liệu */}
          <div className="mb-10">
            <div className="bg-blue-500 text-white py-2 px-4 rounded mb-4 w-1/4">
              Nguyên liệu
            </div>
            <div className="grid grid-cols-4 gap-4">
              {Ingredients.map((ingredient) => (
                <label
                  key={ingredient.id}
                  className="flex items-center checkbox-label"
                >
                  <input
                    type={ingredient.type}
                    className="hidden"
                    value={ingredient.name}
                    onChange={() =>
                      handleCheckboxChange(
                        "ingredients",
                        ingredient.name.toLowerCase()
                      )
                    }
                  />
                  <div className="custom-checkbox">
                    <div className="checkbox-icon"></div>
                  </div>
                  {ingredient.name}
                </label>
              ))}
            </div>
          </div>

          {/* Thời gian*/}
          <div className="mb-10">
            <div className="bg-green-500 text-white py-2 px-4 rounded mb-4 w-1/4">
              Thời gian
            </div>
            <div className="grid grid-cols-5 gap-5">
              {CookingTime.map((time, index) => (
                <label key={time.id} className="flex items-center radio-label">
                  <input
                    type={time.type}
                    name="time"
                    className="hidden"
                    value={time.name}
                    onChange={() =>
                      handleRadioChange("cooking_time", index + 1)
                    }
                  />
                  <div className="custom-radio-cooking-time"></div>
                  {time.name}
                </label>
              ))}
            </div>
          </div>

          {/* Số sao đánh giá */}
          <div>
            <div className="bg-yellow-500 text-white py-2 px-4 rounded mb-4 w-1/4">
              Số sao đánh giá
            </div>
            <div className="grid grid-cols-5 gap-5">
              {Ratings.map((max_rating, index) => (
                <label
                  key={max_rating.id}
                  className="flex items-center radio-label"
                >
                  <input
                    type={max_rating.type}
                    name="max_rating"
                    className="hidden"
                    value={max_rating.name}
                    onChange={() => handleRadioChange("max_rating", index + 1)}
                  />
                  <div className="custom-radio-max_rating"></div>
                  {max_rating.name}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end p-4">
          <button
            className={` text-white font-bold py-2 px-4 rounded mx-4 w-1/6 ${
              !checkedItems.ingredients.length &&
              !checkedItems.cooking_time &&
              !checkedItems.max_rating
                ? "cursor-not-allowed bg-gray-400"
                : "bg-green-500 hover:bg-green-700"
            }`}
            disabled={
              !checkedItems.ingredients.length &&
              !checkedItems.cooking_time &&
              !checkedItems.max_rating
            }
            onClick={handleFilter}
          >
            Lọc
          </button>

          <button
            className="bg-gray-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded w-1/6"
            onClick={handleModalFilterClose}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalFilter;
