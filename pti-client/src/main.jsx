import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import FoodsProvider from "./providers/FoodsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FoodsProvider>
      <RouterProvider router={router} />
    </FoodsProvider>
  </React.StrictMode>
);
