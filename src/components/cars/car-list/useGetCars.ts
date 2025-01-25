import {useEffect, useState} from "react";
import {ICar} from "../../../models/cars/ICar.tsx";
import {getCars} from "../../../api/getData.ts";

export const useGetCars = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getCars().then(cars => setCars(cars))
    }, [cars]);

    return cars
}