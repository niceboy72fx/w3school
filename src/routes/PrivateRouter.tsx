import HookUseLoader from "../hook/preLoading/HookUseLoader";
import MyInfor from "../pages/infor/MyInfor";
import Lesson from "../pages/lesson/Lesson";
import MyLearning from "../pages/myLearning/MyLearning";

export default [
  {
    path: "/my-learning",
    element: <MyLearning />,
  },
  {
    path: "/my-lessons",
    element: <Lesson />,
  },
  {
    path: "/my-infor",
    loader: async () => {
      const response = await fetch(
        `https://6397f68586d04c7633a1b143.mockapi.io/test`
      );
      const user = await response.json();
      return user;
    },
    element: <HookUseLoader component={<MyInfor />} />,
  },
];
