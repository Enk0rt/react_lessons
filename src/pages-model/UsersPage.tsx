import {UsersList} from "../components/user-component/UsersList.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <div >
            <Outlet/>
            <UsersList/>
        </div>
    );
};

