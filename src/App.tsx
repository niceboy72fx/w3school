import { useEffect, useState } from "react";

import "./App.css";
import NotFound404 from "./components/NotFound404";
import DefaultLayout from "./layout/DefaultLayout";
import { RouterProvider } from "react-router";
import { Router } from "./routes/routes";
import ToastMesseger, { RouterConfig } from "./util/router-config-url";
import LoadingScreen from "./util/preLoading";

function App() {
  const route = Router();
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 0);
  // }, []);
  // return <>{loading ? <LoadingScreen /> :  />}</>
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
