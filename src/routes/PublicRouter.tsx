import NotFound404 from "../components/NotFound404";
import DefaultLayout from "../layout/DefaultLayout";
import FormAuth from "../pages/auth/Auth";
import { RouterConfig } from "../util/router-config-url";

export default [
  {
    path: "/auth/:pathAuth",
    element: <FormAuth func={RouterConfig} />,
  },
  {
    path: "/",
    element: <DefaultLayout />,
  },
];
