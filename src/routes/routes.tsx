import {
  createBrowserRouter,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import NotFound404 from "../pages/notfound404/NotFound404";
import PublicRouter from "./PublicRouter";
import { useAuth } from "../util/router-config";
import DefaultLayout, { CourseLayout } from "../layout/DefaultLayout";
import PrivateRouter from "./PrivateRouter";
import FormAuth from "../pages/auth/Auth";
import ForgotPassword, {
  EmailConfirm,
  EmailSent,
  ResetPassword,
} from "../pages/forgot-password/ForgotPassword";
import CourseContent from "../pages/course/Course";
import LoadingScreen from "../hook/preLoading/HookUseLoader";
import MyInfor from "../pages/infor/MyInfor";
import HookUseLoader from "../hook/preLoading/HookUseLoader";
import CodePage from "../pages/code/CodePage";

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
      loader: async () => {
        const response = await fetch(
          `https://6397f68586d04c7633a1b143.mockapi.io/test`
        );
        const user = await response.json();
        return user;
      },
      element: (
        <ProtectedRoute>
          <HookUseLoader component={<DefaultLayout />} />
        </ProtectedRoute>
      ),
      children: [...PublicRouter, ...privateRoute],
    },
    {
      path: "/courses/:name",
      loader: async () => {
        const response = await fetch(
          `https://6397f68586d04c7633a1b143.mockapi.io/test`
        );
        const user = await response.json();
        return user;
      },
      element: <CourseContent component={<CourseContent />} />,
    },

    {
      path: "/coding",
      element: <CodePage />,
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
      ],
    },
    {
      path: "/password-reset/:id",
      element: <ResetPassword />,
    },
    {
      path: "*",
      element: <NotFound404 />,
    },
  ]);
};
