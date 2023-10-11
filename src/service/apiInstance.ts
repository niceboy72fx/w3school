import { message } from "antd";
import axios from "axios";

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
  // const [messageApi] = message.useMessage();
  fetchCSRFToken();
  try {
    const response = await axiosInstance.post(`/${auth}`, req);
    // messageApi.success("Login success ! Please wait a minute ! :3");
    console.log(response.data.success);
    sessionStorage.setItem("login", JSON.stringify(response.data.success));
    return response.data.success;
  } catch (error) {
    // messageApi.error("" + error);
    throw new Error("Authentication failed");
  }
};
