import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Ingredients, Times, Rates } from "../Data/HomepageData";

function ModalFilter({ handleModalFilterClose }) {
  const handleFilter = (e) => {
    e.preventDefault();

    handleModalFilterClose();
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

        <div className="p-10">
          {/* Nguyên liệu */}
          <div className="mb-10">
            <div className="bg-blue-500 text-white py-2 px-4 rounded mb-4 w-1/4">
              Nguyên liệu
            </div>
            <div className="grid grid-cols-4 gap-4">
              {Ingredients.map((ingredient) => (
                <label key={ingredient.id} className="flex items-center">
                  <input type={ingredient.type} className="mr-2" />
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
              {Times.map((time) => (
                <label key={time.id} className="flex items-center">
                  <input type={time.type} name="time" className="mr-2" />
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
              {Rates.map((rate) => (
                <label key={rate.id} className="flex items-center">
                  <input type={rate.type} name="rating" className="mr-2" />
                  {rate.name}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end p-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-4 w-1/6"
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
