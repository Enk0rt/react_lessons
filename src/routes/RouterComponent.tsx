import {useRoutes} from "react-router-dom";
import {AppRoutes} from "./const.ts";
import {HomePage} from "../pages/home/HomePage.tsx";
import {CarsPage} from "../pages/cars/CarsPage.tsx";


export const RouterComponent = ()  => useRoutes([

    {
        element: <HomePage/>,
        path: AppRoutes.root,
        index:true,
    },
    {
        element:<CarsPage/>,
        path: AppRoutes.cars,
    },
]);
