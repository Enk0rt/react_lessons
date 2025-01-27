import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v1",
    headers: {"Content-type": "application/json"},
})

