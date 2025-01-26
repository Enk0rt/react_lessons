import {Menu} from "../../components/menu/Menu.tsx";
import {CarList} from "../../components/cars/car-list/CarList.tsx";
import {useState} from "react";

export const CarsPage = () => {
    const [shouldRefetch,setShouldRefetch] = useState<boolean>(false);
    return (
        <div>
            <Menu setShouldRefetch={setShouldRefetch}/>
            <div className={'w-4/5 mx-auto'}>
                <CarList shouldRefetch={shouldRefetch}/>
            </div>
        </div>
    );
};

