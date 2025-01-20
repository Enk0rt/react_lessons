import {Link} from "react-router-dom";
import {AppRoutes} from "../../routes/const.ts";

export const Menu = () => {
    return (
        <div>
            <ul className={'flex justify-center gap-5'}>
                <Link to={AppRoutes.root}>
                    <li className={'border border-black p-2 px-4 hover:bg-white hover:bg-opacity-50'}>Home</li>
                </Link>
                <Link to={AppRoutes.users}>
                    <li className={'border border-black p-2 px-4 hover:bg-white hover:bg-opacity-50'}>Users</li>
                </Link>
            </ul>
        </div>
    );
};

