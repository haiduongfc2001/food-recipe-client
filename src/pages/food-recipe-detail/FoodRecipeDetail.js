import styles from "./FoodRecipeDetail.module.css";
import BreadCrumbs from "./BreadCrumbs";
import { Link } from "react-router-dom";
import * as APIService from "../../services/APIService";
import { API_SERVICE, STATUS_CODE } from "../../utils/Constants";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/CapitalizeFirstLetter";
import Loading from "../../components/homepage/Loading";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import defaultImage from "../../assets/1377194.png";

function FoodRecipeDetail() {
  const [dataRes, setDataRes] = useState({});
  const [click, setClick] = useState(0);
  const [loadingFoodRecipeTop, setLoadingFoodRecipeTop] = useState(false);
  const [foodRecipeTop, setFoodRecipeTop] = useState([]);
  const [showDetails, setShowDetails] = useState(
    Array(foodRecipeTop.length).fill(false)
  );

  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const currentFoodRecipeID = urlParams.get("id");
  const api = API_SERVICE.GET_FOOD_RECIPE_DETAIL;

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
        id={`foodCard-${index}`}
        className="relative bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
      >
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 bg-gray-100 flex flex-col justify-between">
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">
              {capitalizeFirstLetter(food.name)}
            </h3>
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

  const fetchData = async () => {
    try {
      setLoadingFoodRecipeTop(true);
      const response = await APIService[api]({ id: currentFoodRecipeID });

      if (response && response.status !== STATUS_CODE.UNAUTHORIZED) {
        setLoadingFoodRecipeTop(false);
        setDataRes(response);
        setFoodRecipeTop(response.recommendedFoods.slice(0, 4));
      }
    } catch (error) {
      alert("Server error!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Extract video ID from the YouTube URL
  const getYouTubeID = (url) => {
    const match = url?.match(/[?&]v=([^?&]+)/);
    return match ? match[1] : null;
  };

  // Get the video ID
  const videoId = getYouTubeID(dataRes?.video);

  // Options for the YouTube player
  const opts = {
    height: "300",
    width: "500",
    playerVars: {
      autoplay: 0,
    },
  };

  return loadingFoodRecipeTop ? (
    <Loading />
  ) : (
    <div className="mx-10 mt-8">
      <div id="top"></div>
      <div className="ml-8">
        <BreadCrumbs dataRes={Object.keys(dataRes).length !== 0 && dataRes} />
      </div>
      {Object.keys(dataRes).length !== 0 && (
        <>
          <div className="flex mr-3 my-8 ml-8">
            <div className={styles.foodImage}>
              <img
                src={dataRes?.images[0]?.url ?? defaultImage}
                alt={dataRes?.name ?? "image"}
              />
            </div>
            <div className={styles.foodRecipe}>
              <p className={styles.text}>
                {capitalizeFirstLetter(dataRes?.name)}
              </p>
              <div style={{ marginLeft: "50px" }}>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <Link to="/comment">
                    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-500">
                      {" "}
                      | 5 Khách hàng đã bình luận{" "}
                    </p>
                  </Link>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      fontSize: "28px",
                      fontWeight: 500,
                    }}
                  >
                    Thành Phần
                  </p>
                  {dataRes?.ingredients.map((result, index = 0) => (
                    <div className={styles.ingredient} key={index++}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ display: "flex", fontSize: "18px" }}>
                          {result?.ingredient?.name &&
                            capitalizeFirstLetter(
                              result?.ingredient?.name
                            )}{" "}
                        </p>
                        <p style={{ display: "flex", fontSize: "16px" }}>
                          Số Lượng: {result?.value}
                        </p>
                      </div>
                      <div className={styles.ingredientImage}>
                        <img
                          src="https://cdn.tgdd.vn/2020/12/content/11-800x500-5.jpg"
                          alt="nguyen lieu"
                        />
                      </div>
                    </div>
                  ))}
                  {dataRes?.ingredients.length > 4 && (
                    <p
                      style={{
                        fontSize: "14px",
                        color: "blue",
                        cursor: "pointer",
                      }}
                    >
                      Xem Thêm{" "}
                    </p>
                  )}
                  <div className={styles.shareAndComment}>
                    <div className={styles.icon}>
                      <a href="https://www.facebook.com">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="32"
                          width="32"
                          viewBox="0 0 512 512"
                        >
                          <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                        </svg>
                      </a>
                      <a href="https://www.linkedln.com">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          width="32"
                          viewBox="0 0 448 512"
                        >
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </svg>
                      </a>
                      <a href="https://www.twitter.com">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          width="34"
                          viewBox="0 0 448 512"
                        >
                          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z" />
                        </svg>
                      </a>
                    </div>
                    <div className={styles.reviews}>Đánh giá món ăn</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.foodDescription}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.title}>
                <p
                  onClick={() => setClick(0)}
                  className={
                    styles.titleText +
                    (click === 0
                      ? " font-bold text-black opacity-100 border-b-black"
                      : "")
                  }
                >
                  Mô tả{" "}
                </p>
                <p
                  onClick={() => setClick(1)}
                  className={
                    styles.titleText +
                    (click === 1
                      ? " font-bold text-black opacity-100 border-b-black"
                      : "")
                  }
                >
                  Video hướng dẫn{" "}
                </p>
                <p
                  onClick={() => setClick(2)}
                  className={
                    styles.titleText +
                    (click === 2
                      ? " font-bold text-black opacity-100 border-b-black"
                      : "")
                  }
                >
                  Cách bảo quản thực phẩm
                </p>
              </div>
              {click === 0 && (
                <div className={styles.description}>
                  {dataRes?.steps.split("\n").map((line, index = 0) => (
                    <p key={index++} className="text-left">
                      {line}
                    </p>
                  ))}
                </div>
              )}
              {click === 1 && (
                <div className={styles.video}>
                  {videoId ? (
                    <YouTube videoId={videoId} opts={opts} />
                  ) : (
                    <p>Sản phẩm hiện tại đang không có video hướng dẫn</p>
                  )}
                </div>
              )}
              {click === 2 && (
                <div className={styles.description}>
                  <p>Sản phẩm hiện tại đang không có dữ liệu về món ăn này</p>
                </div>
              )}
            </div>
            <div className={styles.moreImage}>
              {dataRes?.images.map((result) => (
                <img src={result.url} alt="hinh anh" key={result.id}></img>
              ))}
            </div>
          </div>
          <div className={styles.foodSimilar}>
            <h1 className="text-center font-bold text-3xl text-gray-800 pb-2 my-2">
              Các công thức nổi bật
            </h1>
            <div className="grid grid-cols-4 gap-4 my-10 bg-slate-200  p-8 rounded-lg shadow-md">
              {foodRecipeTop?.map((food, index) => renderFoodCard(food, index))}
            </div>
            <button className={styles.moreProduct}>Xem Thêm </button>
          </div>
        </>
      )}
    </div>
  );
}

export default FoodRecipeDetail;
