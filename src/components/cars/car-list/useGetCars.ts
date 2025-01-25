import {useEffect, useState} from "react";
import {ICar} from "../../../models/cars/ICar.tsx";
import {getCars} from "../../../api/getData.ts";

export const useGetCars = () => {
    const [cars, setCars] = useState<ICar[]>([])
    const [shouldRefetch,setShouldRefetch] = useState<boolean>(false)

    useEffect(() => {
        getCars().then(cars => setCars(cars))
    }, [shouldRefetch]);
    console.log(cars)
    return {cars,setCars,shouldRefetch,setShouldRefetch}
}