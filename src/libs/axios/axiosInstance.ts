import axios from "axios"
export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        // Handle errors here
        return Promise.reject(error);
    }
);