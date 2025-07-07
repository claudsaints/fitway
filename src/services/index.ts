import { AppError } from "@utils/AppError"
import axios, {AxiosInstance} from "axios"


const baseURL = process.env.EXPO_PUBLIC_SERVER_URL;

export const api: AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",

    }
})

api.interceptors.response.use((res) => res, error => {
    if(error.response && error.response.data){
        return Promise.reject(new AppError(error.response.data.message));
    } else {
        console.log(error);
        return Promise.reject(error);
    }
});