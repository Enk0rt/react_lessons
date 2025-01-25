import {ICar} from "../models/cars/ICar.tsx";
import {axiosInstance} from "./axios.ts";
import {IForm} from "../models/form/IForm.ts";

export const getCars = async ():Promise<ICar[]> => {
    const {data} = await axiosInstance.get<ICar[]>('/cars')
    return data;
}

export const addCar = (data:IForm,fn: () => void) => {
    axiosInstance.post('/cars',data).then(getCars).finally(fn)
}