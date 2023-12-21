import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { noneLoginRouteList, routeList, routeLoginList } from "./List";
import PageNotFound from "../pages/error/PageNotFound";
import Layout from "../layouts/Layout";
import PrivateRoute from "./PrivateRoute";

export default function Router() {
  // loop render route
  const renderRoutes = (routes) => {
    return routes.map((routeItem, index) =>
      !routeItem.children ? (
        <Route key={index} path={routeItem.path} element={routeItem.element} />
      ) : (
        <React.Fragment key={index}>
          <Route path={routeItem.path} element={routeItem.element} />
          <Route path={routeItem.path}>
            {renderRoutes(routeItem.children)}
          </Route>
        </React.Fragment>
      )
    );
  };

  const renderLoginRoutes = (routes) => {
    return routes.map((routeItem, index) =>
      !routeItem.children ? (
        <Route
          key={index}
          path={routeItem.path}
          element={<PrivateRoute>{routeItem.element}</PrivateRoute>}
        ></Route>
      ) : (
        <React.Fragment key={index}>
          <Route
            path={routeItem.path}
            element={<PrivateRoute>{routeItem.element}</PrivateRoute>}
          />
          <Route path={routeItem.path}>
            {renderRoutes(routeItem.children)}
          </Route>
        </React.Fragment>
      )
    );
  };

  return (
    <React.Fragment>
      <Routes>
        <Route element={<Layout />}>{renderRoutes(routeList)}</Route>

        <Route path="/" element={<Layout />}>
          {renderLoginRoutes(routeLoginList)}
        </Route>

        <Route element={<Layout />}>
          {noneLoginRouteList.map((routeItem, index) => (
            <Route
              key={index}
              path={routeItem.path}
              element={routeItem.element}
            />
          ))}
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Fragment>
  );
}
