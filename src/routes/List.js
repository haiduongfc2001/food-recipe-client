import CreateNewRecipe from "../pages/create-new-recipe/CreateNewRecipe";
import FoodRecipeDetail from "../pages/food-recipe-detail/FoodRecipeDetail";
import FoodRecipeComment from "../pages/food-recipe-comment/FoodRecipeComment";
import Homepage from "../pages/homepage/HomePage";
import Login from "../pages/login/Login";

/**
 * List of logged in router
 */
export const routeList = [
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "food-recipe-detail",
        element: <FoodRecipeDetail />,
      },
      {
        path: "create-new-recipe",
        element: <CreateNewRecipe />,
      },
      {
        path: "food-recipe-comment",
        element: <FoodRecipeComment />,
      },
    ],
  },
];
