import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { routeList } from "./List";
import PageNotFound from "../pages/error/PageNotFound";
import Layout from "../layouts/Layout";

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

  return (
    <React.Fragment>
      <Routes>
        <Route element={<Layout />}>{renderRoutes(routeList)}</Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Fragment>
  );
}
