import FoodRecipeDetail from "../pages/food-recipe-detail/FoodRecipeDetail";
import Homepage from "../pages/homepage/HomePage";

/**
 * List of logged in router
 */
export const routeList = [
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "food-recipe-detail",
        element: <FoodRecipeDetail />,
      },
    ],
  },
];
