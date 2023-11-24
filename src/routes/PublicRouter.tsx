import NotFound404 from "../pages/components/NotFound404";
import HookUseLoader from "../hook/preLoading/HookUseLoader";
import DefaultLayout from "../layout/DefaultLayout";
import FormAuth from "../pages/auth/Auth";
import HomePage from "../pages/homepage/HomePage";
import Tutorial from "../pages/tutorial/Tutorial";
import { RouterConfig } from "../util/router-config-url";

export default [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tutorial",
    loader: async () => {
      const response = await fetch(
        `https://6397f68586d04c7633a1b143.mockapi.io/test`
      );
      const user = await response.json();
      return user;
    },
    element: <HookUseLoader component={<Tutorial />} />,
  },
];
