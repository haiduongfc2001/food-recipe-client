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
        path: "food-recipe-detail",
        element: <FoodRecipeDetail />,
      },
    ],
  },
];

export const routeLoginList = [
  {
    path: "create-new-recipe",
    element: <CreateNewRecipe />,
  },
];

export const noneLoginRouteList = [
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
];
