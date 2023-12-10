import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { LOADING_DATA } from "../../utils/Constants";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-3/5 pt-8">
      <div className="text-blue-500">
        <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      </div>
      <div className="ml-3 text-gray-700 text-xl font-semibold">
        {LOADING_DATA}
      </div>
    </div>
  );
};

export default Loading;
