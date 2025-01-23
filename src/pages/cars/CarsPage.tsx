import {Menu} from "../../components/menu/Menu.tsx";
import {CarList} from "../../components/cars/car-list/CarList.tsx";

export const CarsPage = () => {

    return (
        <div>
            <Menu/>
            <div className={'w-4/5 mx-auto'}>
                <CarList/>
            </div>
        </div>
    );
};

