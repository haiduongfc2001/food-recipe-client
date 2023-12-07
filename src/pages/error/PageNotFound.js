import React from "react";
import { Link } from "react-router-dom";

const boxStyle =
  "flex items-center flex-col my-10 p-8 shadow-lg rounded-md bg-gray-100";
const headingStyle = "text-blue-500 text-center text-3xl font-semibold mb-4";
const textStyle = "text-blue-500 text-center text-base mb-6";
const btnStyle =
  "bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-200 py-2 px-4 rounded";

const PageNotFound = () => (
  <div className="container mx-auto">
    <div className={boxStyle}>
      <h5 className={headingStyle}>
        404: The page you are looking for isn’t here
      </h5>
      <p className={textStyle}>
        You either tried some shady route or you came here by mistake. Whichever
        it is, try using the navigation
      </p>
      <Link to={"/"} className="no-underline">
        <button className={btnStyle}>Back to Homepage</button>
      </Link>
    </div>
  </div>
);

export default PageNotFound;
