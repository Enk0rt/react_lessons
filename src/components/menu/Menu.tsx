import {Link} from "react-router-dom";
import {AppRoutes} from "../../routes/const.ts";
import {Modal} from "../modal/Modal.tsx";
import {useState} from "react";
import {Form} from "../form/Form.tsx";
import {useChangeThemeAndRefetch} from "../../hooks/useChangeThemeAndRefetch.tsx";
import "./Menu.css"



export const Menu = () => {
    const [active, setActive] = useState<boolean>(false)
    const {theme, setTheme, setShouldRefetch} = useChangeThemeAndRefetch();

    const themeHandler = () => {
        return theme === 'Light' ? setTheme('Dark') : setTheme('Light')
    }

    return (
        <div className={`header--${theme} flex justify-center items-center h-20`}>
            <div className={'w-4/5 flex justify-end relative mx-auto '}>
                <ul className={'flex gap-10 justify-between'}>
                    <Link to={AppRoutes.root}>
                        <li className={'block border w-20 px-4 py-1 text-center hover:bg-gray-50 hover:bg-opacity-20 transition'}>Home</li>
                    </Link>
                    <Link to={AppRoutes.cars}>
                        <li className={' block border w-20 py-1 text-center hover:bg-gray-50 hover:bg-opacity-20 transition'}>Cars</li>
                    </Link>
                    <li className={' block border w-20 py-1 text-center hover:bg-gray-50 hover:bg-opacity-20 transition'}>
                        <button className={'w-full'} onClick={() => setActive(true)}>Add Car</button>
                    </li>
                    <li className={' block border w-20 py-1 text-center hover:bg-gray-50 hover:bg-opacity-20 transition'}>
                        <button className={'w-full'} onClick={themeHandler}>{theme}</button>
                    </li>
                </ul>
            </div>
            <Modal active={active} setActive={setActive} children={
                <Form setActive={setActive} setShouldRefetch={setShouldRefetch}/>
            }/>
        </div>
    );
};

