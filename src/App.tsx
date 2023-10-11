import { useState } from "react";

import "./App.css";
import NotFound404 from "./components/NotFound404";
import DefaultLayout from "./layout/DefaultLayout";
import { RouterProvider } from "react-router";
import { Router } from "./routes/routes";
import ToastMesseger, { RouterConfig } from "./util/router-config-url";

function App() {
  const route = Router();
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
