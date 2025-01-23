import {ICar} from "../models/cars/ICar.tsx";
import {axiosInstance} from "./axios.ts";

export const getCars = async ():Promise<ICar[]> => {
    const {data} = await axiosInstance.get<ICar[]>('/cars')
    return data;
}