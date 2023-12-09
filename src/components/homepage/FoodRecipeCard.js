import { useState } from "react";
import { Foods } from "../Data/HomepageData";
import { INITIAL_PAGE, MAX_BUTTONS_TO_SHOW } from "../../utils/Constants";
import { StarSVG } from "../Data/StarSVG";
import { useNavigate } from "react-router-dom";

function FoodRecipeCard({ itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [showDetails, setShowDetails] = useState(
    Array(Foods.length).fill(false)
  );

  const navigate = useNavigate();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFoods = Foods.slice(startIndex, endIndex);

  const totalPages = Math.ceil(Foods.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
    };

    return (
      <div
        key={index}
        className="relative bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
      >
        <img
          src={food.url}
          alt={food.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 bg-gray-100 flex flex-col justify-between">
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">{food.name}</h3>
            <h4 className="text-md text-gray-500">{food.description}</h4>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div>{food.cooking_time}</div>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">{food.rate}</span>
              <StarSVG />
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
                currentPage === page ? "bg-blue-500 text-white" : "bg-gray-300"
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
    <div className="grid grid-cols-4 gap-4 my-10">
      {currentFoods.map((food, index) => renderFoodCard(food, index))}
      {renderPageButtons()}
    </div>
  );
}

export default FoodRecipeCard;
