import { createBrowserRouter, useParams } from "react-router-dom";
import NotFound404 from "../pages/notfound404/NotFound404";
import PublicRouter from "./PublicRouter";
export const Router = () => {
  return createBrowserRouter([
    ...PublicRouter,
    {
      path: "*",
      element: <NotFound404 />,
    },
  ]);
};
