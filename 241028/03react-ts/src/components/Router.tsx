import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Root from "../Root";
import NotFound from "./NotFound";
import ErrorComponent from "./ErrorComponent";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
