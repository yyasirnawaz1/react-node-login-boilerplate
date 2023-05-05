import axios, { AxiosInstance } from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Config from "./config";

const UseAxiosProtected = (): AxiosInstance => {
  const { token } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL: Config.baseURL,
    headers: {
      common: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  // axios.defaults.withCredentials = true;

  return axiosInstance;
};

export const UseAxios = (): AxiosInstance => {
  const axiosInstance = axios.create();

  return axiosInstance;
};

export default UseAxiosProtected;
