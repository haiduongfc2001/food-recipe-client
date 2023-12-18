export const PAGE_SIZE = 8;
export const DISPLAY_PAGE_SIZE = [8, 12, 16];
export const INITIAL_PAGE = 1;
export const MAX_BUTTONS_TO_SHOW = 5;
export const NOT_FOUND_RESULT = "Xin lỗi, không tìm thấy kết quả";
export const NOT_FOUND_RESULT_FOR_SEARCH =
  "Chúng tôi không thể tìm thấy bất kỳ kết quả nào cho tìm kiếm của bạn.";
export const LOADING_DATA = "Đang tải...";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhIiwiaWQiOjEsImlhdCI6MTcwMjczNDUxOH0.LjXe6lHzcAJB_lXxnZeQZmQCibKAINr3WUajViNrTyo";
export const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
};

export const REACT_APP_BASE_URL = "http://localhost:5000";

export const API_SERVICE = {
  SEARCH: "search",
  GET_FOOD_RECIPE_DETAIL: "getFoodRecipeDetail",
  GET_FOOD_RECIPE_TOP: "getFoodRecipeTop",
  CREATE_NEW_RECIPE: "createNewRecipe",
  POST_REVIEW: "postReview",
};
