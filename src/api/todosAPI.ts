import axios, { AxiosRequestConfig } from "axios";
import { getEnvVariables } from "../helpers";


const { VITE_API_URL } = getEnvVariables();

export const todoistAPI = axios.create({ baseURL: VITE_API_URL });

//Set the interceptors to include the token in the headers
todoistAPI.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
    "todoist-token": localStorage.getItem("todoist-token") || "",
  };
  return config;
});
