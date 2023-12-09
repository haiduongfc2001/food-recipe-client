import { extractErrorInfo } from "./ExtractErrorInfo";
import * as CommonService from "./CommonService";

export const search = async ({ search }) => {
  try {
    const res = await CommonService.post(
      "/search",
      {
        search,
      },
      {}
    );

    return res;
  } catch (error) {
    return extractErrorInfo(error);
  }
};

export const filter = async ({ ingredients, times, rates }) => {
  try {
    const res = await CommonService.post(
      "/filter",
      {
        ingredients,
        times,
        rates,
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
