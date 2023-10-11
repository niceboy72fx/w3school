import NotFound404 from "../components/NotFound404";
import FormAuth from "../pages/auth/Auth";

export default [
  {
    path: "/auth",
    element: <FormAuth />,
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
];
