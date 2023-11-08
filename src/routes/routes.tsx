import { createBrowserRouter, useNavigate } from "react-router-dom";
import NotFound404 from "../pages/notfound404/NotFound404";
import PublicRouter from "./PublicRouter";
import { useAuth } from "../util/router-config";
import DefaultLayout from "../layout/DefaultLayout";
import PrivateRouter from "./PrivateRouter";
import FormAuth from "../pages/auth/Auth";
import ForgotPassword, {
  EmailConfirm,
  EmailSent,
  ResetPassword,
} from "../pages/forgot-password/ForgotPassword";

const ProtectedRoute: React.FC<{ children: any }> = ({ children }) => {
  const navigate = useNavigate();
  if (!localStorage.getItem("login")) {
    navigate("/auth/login");
  }
  return children;
};

export const Router = () => {
  const privateRoute = localStorage.getItem("login") ? PrivateRouter : [];
  return createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <DefaultLayout />
        </ProtectedRoute>
      ),
      children: [...PublicRouter, ...privateRoute],
    },
    {
      path: "/auth/:pathAuth",
      element: <FormAuth />,
    },
    {
      path: "/forgot",
      element: <ForgotPassword />,
      children: [
        {
          path: "/forgot/forgot-password",
          element: <EmailConfirm />,
        },
        {
          path: "/forgot/email-sent",
          element: <EmailSent />,
        },
        {
          path: "/forgot/reset",
          element: <ResetPassword />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound404 />,
    },
  ]);
};
