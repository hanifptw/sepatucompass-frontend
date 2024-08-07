import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootRoute } from "@/routes/root";
import { HomeRoute, loader as homeLoader } from "@/routes/home";
import { RegisterRoute, action as registerAction } from "@/routes/register";
import { LoginRoute, action as loginAction } from "@/routes/login";
import { MeRoute, loader as meLoader } from "@/routes/me";
import { CartRoute, loader as cartLoader } from "@/routes/cart";
import "@/index.css";
import {
  ProductDetailRoute,
  loader as productDetailLoader,
} from "@/routes/product-detail";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
        loader: homeLoader,
      },
      {
        path: "/register",
        element: <RegisterRoute />,
        action: registerAction,
      },
      {
        path: "/login",
        element: <LoginRoute />,
        action: loginAction,
      },
      {
        path: "/me",
        element: <MeRoute />,
        loader: meLoader,
      },
      {
        path: "/cart",
        element: <CartRoute />,
        loader: cartLoader,
      },
      {
        path: "/products/:slug",
        element: <ProductDetailRoute />,
        loader: productDetailLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
