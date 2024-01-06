import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import AddFood from "../pages/AddFood/AddFood";
import Container from "../components/Shared/Container";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
        {
            path: "/",
            element:<Home></Home>,
        },
        {
            path: "/add-food",
            element:<Container><AddFood></AddFood></Container>
        },
    ]
  },
]);
