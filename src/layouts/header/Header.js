import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-white">
          FoodRecipe
        </Link>

        <div className="flex items-center">
          <div className="ml-4">
            <input
              type="text"
              placeholder="Search"
              className="text-red-700 py-1 px-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
