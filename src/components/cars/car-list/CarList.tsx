import {CarItem} from "../car-item/CarItem.tsx";
import {useEffect, useState} from "react";
import {getCars} from "../../../api/getData.ts";
import {ICar} from "../../../models/cars/ICar.tsx";

type CarListProps = {
    shouldRefetch: boolean
}

export const CarList = ({shouldRefetch}:CarListProps) => {
    const [cars, setCars] = useState<ICar[]>([])

    useEffect(() => {
        getCars().then(cars => setCars(cars))
    }, [shouldRefetch]);

    return (
        <div className={'grid grid-cols-4 gap-4 mx-auto mt-6'}>
            {
                cars.map(car => <CarItem key={car.id} car={car}/>)
            }
        </div>
    );
};

