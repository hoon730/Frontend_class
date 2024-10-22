import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout";
import reset from "styled-reset";
import Movies from "./router/Movies";
import Movie from "./router/Movie";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
    color: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: "movies/:id",
        element: <Movie />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
