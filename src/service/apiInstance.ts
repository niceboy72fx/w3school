import { message } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { TOAST_MESSAGE } from "../redux/reducer/toastMessage";
import store from "../redux/store";

export const apiBaseUrl: string = "http://localhost";

export const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
});

export const fetchCSRFToken = async () => {
  try {
    await axiosInstance.get("/sanctum/csrf-cookie");
  } catch (error) {
    throw new Error("Failed to fetch CSRF token");
  }
};

export const Auth = async (req: object, auth: string) => {
  await fetchCSRFToken();
  try {
    const response = await axiosInstance.post(`/${auth}`, req);
    localStorage.setItem("login", "true");
    localStorage.setItem("name", JSON.stringify(response.data.name));
    localStorage.setItem("email", JSON.stringify(response.data.email));
    window.location.replace("/");
  } catch (error) {
    // store.dispatch(
    //   TOAST_MESSAGE({
    //     type: "error",
    //     content: error,
    //     duration: 5,
    //   })
    // );
    throw new Error("Authentication failed");
  }
};

export const LogOut = async () => {
  await fetchCSRFToken();
  try {
    const response = await axiosInstance.post(`/logout`);
    localStorage.removeItem("login");
    window.location.replace("/");
  } catch (error) {
    throw new Error("Authentication failed");
  }
};

export const ResetPasswordEmail = async (req: object) => {
  await fetchCSRFToken();
  try {
    const response = await axiosInstance.post(`/forgot-password`, req);
    console.log("test");
    // navigate("/forgot/email-sent");
    console.log(response);
  } catch (error) {
    console.log(error);
    throw new Error("Authentication failed");
  }
};

export const UpdateInfor = async (req: object) => {
  await fetchCSRFToken();
  try {
    return await axiosInstance.post(
      `api/profile/update`,
      { _method: "PUT", ...req },
      { headers: { "Content-Type": "multipart/form-data" } }
    );
  } catch (error) {
    console.log(error);
    throw new Error("Authentication failed");
  }
};
