import FoodRecipeDetail from "../pages/food-recipe-detail/FoodRecipeDetail";
import FoodRecipeComment from "../pages/food-recipe-comment/FoodRecipeComment";
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
      {
        path: "food-recipe-comment",
        element: <FoodRecipeComment/>,
      }
    ],
  },
];
