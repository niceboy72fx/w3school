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
    path: "/search",
    element: <SearchPage />,
  },
];
