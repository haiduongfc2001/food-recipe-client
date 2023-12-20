import { extractErrorInfo } from "./ExtractErrorInfo";
import * as CommonService from "./CommonService";
import { TOKEN } from "../utils/Constants";

export const search = async ({
  search,
  ingredients,
  cooking_time,
  max_max_rating,
  page_size,
  sort,
  by,
}) => {
  try {
    const res = await CommonService.post(
      "/search",
      {
        search,
        ingredients,
        cooking_time,
        max_max_rating,
        page_size,
        sort,
        by,
      },
      {}
    );

    return res;
  } catch (error) {
    return extractErrorInfo(error);
  }
};

export const getFoodRecipeDetail = async ({ id }) => {
  try {
    const res = await CommonService.get(`/food/${id}`, {}, {});

    return res;
  } catch (error) {
    return extractErrorInfo(error);
  }
};

export const getFoodRecipeTop = async () => {
  try {
    const res = await CommonService.get("/get-ramdom-food", {}, {});

    return res;
  } catch (error) {
    return extractErrorInfo(error);
  }
};

export const createNewRecipe = async (formDataToSend) => {
  try {
    const res = await CommonService.post(
      "/food/create-food",
      formDataToSend,
      {}
    );

    return res;
  } catch (error) {
    return extractErrorInfo(error);
  }
};

export const postReview = async ({ food_id, rating, review }) => {
  try {
    const res = await CommonService.post(
      "/review",
      { food_id, rating, review },
      {
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      }
    );

    return res;
  } catch (error) {
    return extractErrorInfo(error);
  }
};

export const userLogin = async ({ username, password }) => {
  try {
    const res = await CommonService.post(
      "/user/login",
      {
        username,
        password,
      },
      {}
    );
    return res;
  } catch (error) {
    return extractErrorInfo(error);
  }
};
