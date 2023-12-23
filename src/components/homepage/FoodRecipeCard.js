import { useState } from "react";
import { INITIAL_PAGE, MAX_BUTTONS_TO_SHOW } from "../../utils/Constants";
import { StarSVG } from "../Data/StarSVG";
import { useNavigate } from "react-router-dom";
import FormatDuration from "../../utils/FormatDuration";
import { capitalizeFirstLetter } from "../../utils/CapitalizeFirstLetter";
import defaultImage from "../../assets/food-placeholder.jpg";
import { StarIcon } from "../../pages/food-recipe-comment/StarIcon";

function FoodRecipeCard({ itemsPerPage, searchResult, foodCardRef }) {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [showDetails, setShowDetails] = useState(
    Array(searchResult.length).fill(false)
  );

  const navigate = useNavigate();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentsearchResult =
    Array.isArray(searchResult) && searchResult.length
      ? searchResult.slice(startIndex, endIndex)
      : [];

  const totalPages = Math.ceil(searchResult.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (!foodCardRef) return;

    setCurrentPage(pageNumber);

    if (foodCardRef.current) {
      foodCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderFoodCard = (food, index) => {
    const handleMouseEnter = (index) => {
      setShowDetails((prevShowDetails) => {
        const updatedShowDetails = [...prevShowDetails];
        updatedShowDetails[index] = true;
        return updatedShowDetails;
      });
    };

    const handleMouseLeave = (index) => {
      setShowDetails((prevShowDetails) => {
        const updatedShowDetails = [...prevShowDetails];
        updatedShowDetails[index] = false;
        return updatedShowDetails;
      });
    };

    const handleNavigate = (foodRecipeID) => {
      const url = `/food-recipe-detail?id=${foodRecipeID}`;
      navigate(url);

      // Cuộn lên đầu trang
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <div
        key={index}
        className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md flex flex-col"
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
      >
        <img
          src={food?.image || defaultImage}
          alt={food.name}
          className={`w-full h-48 ${
            food?.image ? "object-cover" : "object-contain"
          }`}
        />
        <div className="p-4 bg-gray-100 flex flex-col justify-between">
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">
              {capitalizeFirstLetter(food.name)}
            </h3>
          </div>
          <div className="flex items-center justify-between mt-4 text-sm">
            <div>Thời gian: {FormatDuration(food.cooking_time)}</div>
            <div className="flex items-center">
              <span className="text-yellow-500 pr-1">{food.rating}</span>

              {food?.rating > 0 ? (
                <StarIcon
                  className="mx-2"
                  height="16"
                  width="18"
                  fill="yellow"
                  offset={food?.rating * 20}
                  id = {`grad${index}`}
                />
              ) : (
                <StarIcon className="mx-2" height="16" width="18" fill="gray" />
              )}
            </div>
          </div>
        </div>
        {showDetails[index] && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <button
              className="text-white bg-blue-500 px-4 py-2 rounded"
              onClick={() => handleNavigate(food.id)}
            >
              Xem chi tiết
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderPageButtons = () => {
    const startPage = Math.max(
      1,
      currentPage - Math.floor(MAX_BUTTONS_TO_SHOW / 2)
    );
    const endPage = Math.min(totalPages, startPage + MAX_BUTTONS_TO_SHOW - 1);

    return (
      <div className="col-span-4 flex justify-center mt-4">
        {currentPage > 3 && (
          <button
            onClick={() => handlePageChange(1)}
            className="mx-2 px-3 py-1 rounded bg-gray-300"
          >
            Đầu
          </button>
        )}
        {[...Array(endPage - startPage + 1)].map((_, index) => {
          const page = startPage + index;

          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`mx-2 px-3 py-1 rounded ${
                currentPage === page
                  ? "bg-blue-500 text-white cursor-default"
                  : "bg-gray-300 hover:bg-blue-300"
              }`}
            >
              {page}
            </button>
          );
        })}
        {currentPage < totalPages - 2 && (
          <button
            onClick={() => handlePageChange(totalPages)}
            className="mx-2 px-3 py-1 rounded bg-gray-300"
          >
            Cuối
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-4 gap-4 my-10 bg-slate-200  p-8 rounded-lg shadow-md">
      {currentsearchResult.map((food, index) => renderFoodCard(food, index))}
      {foodCardRef && renderPageButtons()}
    </div>
  );
}

export default FoodRecipeCard;
