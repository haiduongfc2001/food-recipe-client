import { extractErrorInfo } from "./ExtractErrorInfo";
import * as CommonService from "./CommonService";

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
