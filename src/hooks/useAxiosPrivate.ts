"use client"; // Needed for Client Components

import { useEffect } from "react";
import {axiosInstance} from "../api/axiosConfig";
import { useRouter } from "next/navigation";

const useAxiosAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config: any) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error: any) => Promise.reject(error)
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response: any) => response,
      async (error: any) => {
        if (error.response?.status === 401) {
          try {
            const { data } = await axiosInstance.get("/auth/refresh"); // Call refresh endpoint
            localStorage.setItem("accessToken", data.accessToken); // Store new token
            error.config.headers["Authorization"] = `Bearer ${data.accessToken}`;
            return axiosInstance(error.config); // Retry original request
          } catch (refreshError) {
            console.error("Session expired, redirecting to login.");
            localStorage.removeItem("accessToken");
            router.push("/login");
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [router]);

  return axiosInstance;
};

export default useAxiosAuth;
