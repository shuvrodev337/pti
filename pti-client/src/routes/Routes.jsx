import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1 className="text-3xl font-bold underline text-center">
          Hello world!
        </h1>
      </div>
    ),
  },
]);
