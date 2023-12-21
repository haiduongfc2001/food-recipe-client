import CreateNewRecipe from "../pages/create-new-recipe/CreateNewRecipe";
import FoodRecipeDetail from "../pages/food-recipe-detail/FoodRecipeDetail";
import FoodRecipeComment from "../pages/food-recipe-comment/FoodRecipeComment";
import Homepage from "../pages/homepage/HomePage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

/**
 * List of logged in router
 */
export const routeList = [
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
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
