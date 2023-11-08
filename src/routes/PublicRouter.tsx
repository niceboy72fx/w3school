import NotFound404 from "../components/NotFound404";
import DefaultLayout from "../layout/DefaultLayout";
import FormAuth from "../pages/auth/Auth";
import HomePage from "../pages/homepage/HomePage";
import { RouterConfig } from "../util/router-config-url";

export default [
  {
    path: "/",
    element: <HomePage />,
  },
];
