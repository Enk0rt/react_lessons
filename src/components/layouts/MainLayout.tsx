import {Menu} from "../menu/Menu.tsx";
import {RouterComponent} from "../../routes/RouterComponent.tsx";
import "./MainLayout.css"

export const MainLayout = () => {
    // const {theme,setTheme} = useChangeThemeAndRefetch();

    return (
        <div>
            <Menu/>
            <RouterComponent/>
        </div>
    );
};

