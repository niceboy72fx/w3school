import { message } from "antd";
import axios from "axios";
import { TOAST_MESSAGE } from "../redux/reducer/toastMessage";
import { Dispatch } from "redux";
import store, { AppDispatch, AppThunk } from "../redux/store";
import { getPostSuccess } from "../redux/reducer/dataDefine";
import { useNavigate } from "react-router";

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

export const Auth = async (dispatch: any, req: object, auth: string) => {
  await fetchCSRFToken();
  await axiosInstance
    .post(`/${auth}`, req)
    .then((response: any) => {
      localStorage.setItem("login", "true");
      localStorage.setItem("name", JSON.stringify(response.data.name));
      localStorage.setItem("email", JSON.stringify(response.data.email));
      window.location.replace("/");
    })
    .catch((error) => {
      console.log(error);
      dispatch(
        TOAST_MESSAGE({
          type: "error",
          content: error?.response?.data?.message,
          duration: 5,
        })
      );
    });
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

export const ResetPasswordEmail = async (dispatch: any, req: object) => {
  await fetchCSRFToken();
  const navigate = useNavigate();
  try {
    const response = await axiosInstance.post(`/forgot-password`, req);
  } catch (error) {
    dispatch(
      TOAST_MESSAGE({
        type: "error",
        content: error?.response?.data?.message,
        duration: 5,
      })
    );
  }
};

export const ResetPasswordForm = async (dispatch: any, req: object) => {
  await fetchCSRFToken();
  try {
    await axiosInstance.post(`/reset-password`, req);
  } catch (error) {
    dispatch(
      TOAST_MESSAGE({
        type: "error",
        content: error?.response?.data?.message,
        duration: 5,
      })
    );
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

export const OAuthGoogle = async (dispatch: any) => {
  try {
    window.addEventListener("message", async (event) => {
      let data = JSON.parse(event.data);
      localStorage.setItem("login", "true");
      localStorage.setItem("name", JSON.stringify(data.name));
      localStorage.setItem("email", JSON.stringify(data.email));
      window.location.replace("/");
    });
    const { data } = await axios.get("http://localhost/redirect/google");
    await window.open(data.data, "Google", "width=400,height=300'");
  } catch (e) {
    dispatch(
      TOAST_MESSAGE({
        type: "error",
        content: "Login Google not successfully ! Please login in w3School!",
        duration: 5,
      })
    );
  }
};
