import { extractErrorInfo } from "./ExtractErrorInfo";
import * as CommonService from "./CommonService";

export const getFilter = async ({ ingredients, times, rates }) => {
  try {
    const res = await CommonService.post(
      "/getFilter",
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
