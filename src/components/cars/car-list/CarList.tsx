import {CarItem} from "../car-item/CarItem.tsx";
import {useGetCars} from "./useGetCars.ts";

export const CarList = () => {
    const {cars} = useGetCars()
    return (
        <div className={'grid grid-cols-4 gap-4 mx-auto mt-6'}>
            {
                cars.map(car => <CarItem key={car.id} car={car}/>)
            }
        </div>
    );
};

