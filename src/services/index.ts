import { AppError } from "@utils/AppError"
import axios, {AxiosInstance} from "axios"

export const api: AxiosInstance = axios.create({
    baseURL: "http://192.168.0.4:3333",
    headers: {
        "Content-Type": "application/json",

    }
})

api.interceptors.response.use((res) => res, error => {
    if(error.response && error.response.data){
        return Promise.reject(new AppError(error.response.data.message));
    } else {
        return Promise.reject(error);
    }
});