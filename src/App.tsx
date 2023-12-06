import { useEffect, useState } from "react";

import "./App.css";
import { RouterProvider } from "react-router";
import { Router } from "./routes/routes";
import { message } from "antd";
import { useSelector } from "react-redux";
import toastMessage from "./redux/reducer/toastMessage";

function App() {
  const route = Router();
  const [messageApi, contextHolder] = message.useMessage();
  const messageData =
    useSelector((state: any) => state.toastMessage) || undefined;
  useEffect(() => {
    if (Object.keys(messageData).length !== 0 && messageData) {
      messageApi.open(messageData);
    }
  }, [messageData]);
  return (
    <>
      {contextHolder}
      <RouterProvider router={route} />
    </>
  );
}

export default App;
