import React from "react";

const boxStyle = "flex flex-col items-center my-10";
const btnStyle =
  "mt-3 bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-200";

const PageAccessDenied = () => (
  <div className="container mx-auto">
    <div className={boxStyle}>
      <h5 className="text-blue-500 text-center text-2xl font-semibold">
        403: Access Denied
      </h5>
      <p className="text-blue-500 text-center text-base">
        You either tried to access a page that you didn't have permission to
        access. That is why you are here.
      </p>
      <a href="/">
        <button className={btnStyle}>Go back to dashboard</button>
      </a>
    </div>
  </div>
);

export default PageAccessDenied;
