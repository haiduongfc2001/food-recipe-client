export const PAGE_SIZE = 8;
export const DISPLAY_PAGE_SIZE = [8, 12, 16];
export const INITIAL_PAGE = 1;
export const MAX_BUTTONS_TO_SHOW = 5;
export const NOT_FOUND_RESULT = "Xin lỗi, không tìm thấy kết quả";
export const NOT_FOUND_RESULT_FOR_SEARCH =
  "Chúng tôi không thể tìm thấy bất kỳ kết quả nào cho tìm kiếm của bạn.";
export const LOADING_DATA = "Đang tải...";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImEiLCJpZCI6MSwiaWF0IjoxNzAyOTY1OTY1fQ.7S19YeWlLBISvlKU-oY0K6MadwT5Gt6ufDXjoj2ZY5Y";
export const CONFIRM_PWD_VALIDATE = "Mật khẩu và mật khẩu xác nhận không khớp!";
export const PWD_VALIDATE =
  "Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường và số!";

export const REVIEW_WARNING = {
  CMT_WARNING: "Bạn chưa bình luận!",
  RATE_WARNING: "Bạn chưa đánh giá!",
  LOGIN_WARNING: "Bạn cần đăng nhập để đánh giá!",
};

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
  USER_LOGIN: "userLogin",
  USER_REGISTER: "userRegister",
};
