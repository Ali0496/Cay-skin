import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./page/ErrorPage";
import HomePage from "./page/HomePage";
import CollectionPage from "./page/CollectionPage";
import ProductPage from "./page/ProductPage";
import CardPage from "./page/CardPage";
import AccountPage from "./page/AccountPage";
import SearchPage from "./page/SearchPage";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/collection",
        element: <CollectionPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/card",
        element: <CardPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);
