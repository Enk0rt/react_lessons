import {CarList} from "../../components/cars/car-list/CarList.tsx";
import {useChangeThemeAndRefetch} from "../../hooks/useChangeThemeAndRefetch.tsx";

export const CarsPage = () => {

   const {theme,shouldRefetch} = useChangeThemeAndRefetch();

    return (
        <div className={`cars--${theme}`}>
            <div className={'w-4/5 mx-auto '}>
                <CarList shouldRefetch={shouldRefetch}/>
            </div>
        </div>
    );
};

