import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCrumbs from "../../components/create-new-recipe/BreadCrumbs";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useNavigate } from "react-router-dom";
import { API_SERVICE, STATUS_CODE } from "../../utils/Constants";
import * as APIService from "../../services/APIService";
import { MethodData } from "./MethodData";

function createEmptyRow() {
  return { name: "", value: "" };
}

function CreateNewRecipe() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cooking_time: {
      hours: "00",
      minutes: "00",
      seconds: "00",
    },
    ingredients: [createEmptyRow()],
    video: "",
    steps: "",
    method: "",
    owner: "1",
    images: [],
  });

  const [click, setClick] = useState(0);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddIngredient = () => {
    setFormData((prevData) => ({
      ...prevData,
      ingredients: [
        ...prevData.ingredients,
        {
          id: prevData.ingredients.length + 1,
          ...createEmptyRow(),
        },
      ],
    }));
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index][field] = value;

    setFormData({
      ...formData,
      ingredients: updatedIngredients,
    });
  };

  const handleCookingTimeChange = (event, field) => {
    const value = event.target.value;

    // Kiểm tra giá trị hợp lệ
    if (
      (field === "hours" && value >= 0 && value <= 23) ||
      (field === "minutes" && value >= 0 && value <= 59) ||
      (field === "seconds" &&
        (formData.cooking_time.hours !== "00" ||
          formData.cooking_time.minutes !== "00") &&
        value >= 0 &&
        value <= 59)
    ) {
      setFormData((prevData) => ({
        ...prevData,
        cooking_time: {
          ...prevData.cooking_time,
          [field]: value.padStart(2, "0"),
        },
      }));
    }
  };

  const handleAddImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.name = "images";
    input.multiple = true;
    input.accept = "image/*";
    input.click();

    input.addEventListener("change", (event) => {
      const selectedImages = Array.from(event.target.files);

      // Limit the number of images to 5
      if (selectedImages.length + formData.images.length > 5) {
        alert("Chỉ được thêm tối đa 5 ảnh.");
        return;
      }

      setFormData((prevData) => ({
        ...prevData,
        images: [...prevData.images, ...selectedImages],
      }));
    });
  };

  const handleRemoveImage = (index) => {
    setFormData((prevData) => {
      const updatedImages = [...prevData.images];
      updatedImages.splice(index, 1);
      return { ...prevData, images: updatedImages };
    });
  };

  const handleCreateNewRecipe = async (e) => {
    e.preventDefault();

    const cookingTimeConvert = `${formData.cooking_time.hours}:${formData.cooking_time.minutes}:${formData.cooking_time.seconds}`;

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("video", formData.video);
    formDataToSend.append("method", formData.method);
    formDataToSend.append("cooking_time", cookingTimeConvert);
    formDataToSend.append("steps", formData.steps);
    formDataToSend.append("owner", formData.owner);

    for (let i = 0; i < formData.ingredients.length; i++) {
      formDataToSend.append(
        `ingredients[${i}][name]`,
        formData.ingredients[i].name
      );
      formDataToSend.append(
        `ingredients[${i}][value]`,
        formData.ingredients[i].value
      );
    }

    for (let i = 0; i < formData.images.length; i++) {
      formDataToSend.append("images", formData.images[i]);
    }

    const response = await APIService[API_SERVICE.CREATE_NEW_RECIPE](
      formDataToSend
    );

    if (response?.status !== STATUS_CODE.UNAUTHORIZED && response?.id) {
      navigate(`/food-recipe-detail?id=${response.id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      alert("Server error!");
    }
  };

  return (
    <div className="mx-20 my-8">
      <BreadCrumbs />

      <form onSubmit={handleCreateNewRecipe}>
        <div className="grid grid-cols-12 mt-10 pb-10 border-2 border-solid border-t-transparent border-r-transparent border-b-gray-300 border-l-transparent">
          <div className="col-span-5 h-80 flex flex-col items-center justify-center border-2 border-black rounded">
            <button
              className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddImage}
            >
              Thêm ảnh
            </button>
            <div className="flex flex-wrap justify-center">
              {formData.images.map((image, index) => (
                <div key={index} className="m-2">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`${index + 1}`}
                    className="w-24 h-24 object-cover mb-2 rounded"
                  />
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleRemoveImage(index)}
                  >
                    Xóa
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-7 mx-8">
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="name"
                className="mb-2 text-md text-gray-900 text-left font-bold text-[16px]"
              >
                Tên món ăn
              </label>
              <input
                type="text"
                name="name"
                className="text-gray-900 text-md rounded-lg block w-full p-2.5 bg-gray-200 placeholder-gray-400 border-1 border-solid border-transparent focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nhập tên món ăn"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-2">
              {formData.ingredients.map((ingredient, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col">
                    {index === 0 && (
                      <label
                        htmlFor="ingredient"
                        className="mb-2 text-md text-gray-900 text-left font-semibold text-[16px]"
                      >
                        Nguyên liệu
                      </label>
                    )}
                    <input
                      type="text"
                      name="ingredient"
                      className="text-gray-900 text-sm rounded-lg block w-3/4 p-2.5 bg-gray-200 placeholder-gray-400 border-1 border-solid border-transparent focus:ring-blue-500 focus:border-blue-500"
                      placeholder=""
                      value={ingredient.name}
                      onChange={(e) =>
                        handleIngredientChange(index, "name", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    {index === 0 && (
                      <label
                        htmlFor="value"
                        className="mb-2 text-sm text-gray-900 text-left font-semibold text-[16px]"
                      >
                        Số lượng
                      </label>
                    )}
                    <input
                      type="text"
                      name="value"
                      className="text-gray-900 text-sm rounded-lg block w-2/5 p-2.5 bg-gray-200 placeholder-gray-400 border-1 border-solid border-transparent focus:ring-blue-500 focus:border-blue-500"
                      placeholder=""
                      value={ingredient.value}
                      onChange={(e) =>
                        handleIngredientChange(index, "value", e.target.value)
                      }
                      required
                    />
                  </div>
                </React.Fragment>
              ))}

              <div className="flex flex-col">
                <Tippy
                  content="Thêm nguyên liệu"
                  placement="top"
                  animation="scale"
                  duration={400}
                >
                  <div
                    className={`h-9 w-9 flex items-center justify-center text-black border-2 border-black rounded-full hover:bg-slate-400 cursor-pointer ${
                      formData.ingredients.some(
                        (ingredient) =>
                          ingredient.name === "" || ingredient.value === ""
                      )
                        ? " opacity-50 cursor-not-allowed "
                        : ""
                    }`}
                    onClick={() => {
                      if (
                        !formData.ingredients.some(
                          (ingredient) =>
                            ingredient.name === "" || ingredient.value === ""
                        )
                      ) {
                        handleAddIngredient();
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </Tippy>
              </div>
            </div>

            <div className="flex items-center space-x-4 my-4 justify-around">
              <div className="flex items-center w-full">
                <span className="text-md text-gray-900 font-bold text-[16px]">
                  Cho
                </span>
                <div className="flex items-center mx-4 space-x-2 border border-gray-300 rounded-md overflow-hidden">
                  <button
                    className="bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-300 p-2"
                    disabled
                  >
                    <FontAwesomeIcon icon={faMinus} className="text-gray-600" />
                  </button>
                  <input
                    type="text"
                    value={1}
                    className="w-12 text-center p-2"
                    readOnly
                  />
                  <button
                    className="bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-300 p-2"
                    disabled
                  >
                    <FontAwesomeIcon icon={faPlus} className="text-gray-600" />
                  </button>
                </div>
                <span className="text-md text-gray-900 font-bold text-[16px]">
                  người
                </span>
              </div>

              <div className="flex items-center w-full">
                <span className="text-md text-gray-900 font-bold text-[16px] mr-4">
                  Phương thức
                </span>
                <select
                  name="method"
                  className="text-gray-900 text-sm rounded-lg block w-2/5 p-2.5 bg-gray-200 placeholder-gray-400 border-1 border-solid border-transparent focus:ring-blue-500 focus:border-blue-500"
                  value={formData.method}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled hidden></option>
                  {MethodData.map((method) => (
                    <option key={method.id} value={method.name}>
                      {method.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex py-4 mt-8 items-center min-w-full">
              <label
                htmlFor="cooking_time"
                className="block text-md text-gray-900 font-bold pr-4 w-2/5 text-left"
              >
                Thời gian nấu
              </label>
              <div className="flex space-x-1 justify-start">
                <input
                  type="number"
                  value={formData.cooking_time.hours}
                  onChange={(e) => handleCookingTimeChange(e, "hours")}
                  maxLength="2"
                  placeholder="HH"
                  className="text-gray-900 text-sm text-center rounded-lg block w-1/5 p-2.5 bg-gray-200 placeholder-gray-400 border-1 border-solid border-transparent focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="flex items-center">:</span>
                <input
                  type="number"
                  value={formData.cooking_time.minutes}
                  onChange={(e) => handleCookingTimeChange(e, "minutes")}
                  maxLength="2"
                  placeholder="MM"
                  className="text-gray-900 text-sm text-center rounded-lg block w-1/5 p-2.5 bg-gray-200 placeholder-gray-400 border-1 border-solid border-transparent focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="flex items-center">:</span>
                <input
                  type="number"
                  value={formData.cooking_time.seconds}
                  onChange={(e) => handleCookingTimeChange(e, "seconds")}
                  maxLength="2"
                  placeholder="SS"
                  className="text-gray-900 text-sm text-center rounded-lg block w-1/5 p-2.5 bg-gray-200 placeholder-gray-400 border-1 border-solid border-transparent focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-t-2 border-solid border-gray-300 pt-10 mx-20">
          <div className="flex flex-col">
            <div className="grid grid-cols-2 relative px-8">
              <p
                onClick={() => setClick(0)}
                className={
                  "col-span-1/2 min-w-80 text-2xl text-center rounded-tl-5 rounded-tr-5 border-4 border-solid border-transparent opacity-60 cursor-pointer transition-all duration-500 ease " +
                  (click === 0
                    ? "font-bold text-black opacity-100 border-b-black"
                    : "")
                }
              >
                Mô tả
              </p>

              <p
                onClick={() => setClick(1)}
                className={
                  "col-span-1/2 min-w-80 text-2xl text-center rounded-tl-5 rounded-tr-5 border-4 border-solid border-transparent opacity-60 cursor-pointer transition-all duration-500 ease " +
                  (click === 1
                    ? "font-bold text-black opacity-100 border-b-black"
                    : "")
                }
              >
                Cách bảo quản thực phẩm
              </p>
            </div>
            <div className="block overflow-y-auto mx-30 my-10 h-300 max-h-500">
              {click === 0 && (
                <textarea
                  placeholder="Nhập các bước nấu ăn ở đây..."
                  name="steps"
                  value={formData.steps}
                  onChange={handleInputChange}
                  className="w-full h-full min-h-[200px] max-h-[500px] p-2 border-4 border-solid rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                  required
                />
              )}

              {click === 1 && (
                <div className="block w-full h-full min-h-[200px] max-h-[500px] p-2 overflow-y-auto">
                  <p className="text-2xl font-bold text-black mb-4">
                    Đang phát triển
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center ml-20">
          <p className="text-xl font-bold text-black mb-2 mr-4">Link video</p>
          <input
            type="text"
            placeholder="Nhập link YouTube vào đây"
            name="video"
            className="text-gray-900 text-sm rounded-lg block w-2/5 p-2.5 bg-gray-200 placeholder-gray-400 border-1 border-solid border-transparent focus:ring-blue-500 focus:border-blue-500"
            value={formData.video}
            onChange={handleInputChange}
            required
          />
          {/* <button
            className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            onClick={handlePasteLink}
          >
            Dán
          </button> */}
        </div>

        <button
          type="submit"
          className={
            "my-6 bg-blue-500 hover:bg-blue-700 text-white font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 " +
            "font-medium rounded-lg text-sm sm:w-24 md:w-24 lg:w-32 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          }
        >
          Tạo
        </button>
      </form>
    </div>
  );
}

export default CreateNewRecipe;
