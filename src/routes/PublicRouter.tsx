import HookUseLoader from "../hook/preLoading/HookUseLoader";
import HomePage from "../pages/homepage/HomePage";
import Tutorial from "../pages/tutorial/Tutorial";
import CourseContent from "../pages/course/Course";
import SearchPage from "../pages/search/Search";

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
  {
    path: "/search",
    element: <SearchPage />,
  },
];
