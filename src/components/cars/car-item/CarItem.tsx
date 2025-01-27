import {ICar} from "../../../models/cars/ICar.tsx";
import {FC} from "react";
import {useChangeThemeAndRefetch} from "../../../hooks/useChangeThemeAndRefetch.tsx";
import "./CarItem.css"
type CarProps  = {
    car:ICar;
}

export const CarItem:FC<CarProps> = ({car}) => {
    const {theme} = useChangeThemeAndRefetch();
    return (
        <div className={` bg-emerald-900 bg-opacity-50 p-5 car-item--${theme} `}>
            <h2>ID:{car.id} - {car.brand} - {car.year}</h2>
            <p>Price - {car.price}</p>
        </div>
    );
};

