import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";

//Головний леяут який, у аутлєті якого буде грузитись контент інших сторінок. Зручно, бо не треба меню прокидувати на кожну сторінку, як у випадку з іншим варіантом роутингу
export const MainLayout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};
