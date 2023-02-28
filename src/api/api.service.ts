import axios, { AxiosRequestConfig } from "axios";
import { IUsersApiResponse } from "../dataTypes";

const axiosInstance = axios.create({
  baseURL: "https://randomuser.me/",
  timeout: 20000,
});

export const ApiService = {
  getUsers: async (): Promise<IUsersApiResponse> => {
    const config: AxiosRequestConfig = {
      params: {
        results: 120,
      },
    };

    const res = await axiosInstance.get("api", config);

    return res.data;
  },
};
