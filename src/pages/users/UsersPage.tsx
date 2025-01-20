import {Menu} from "../../components/menu/Menu.tsx";
import {UserList} from "../../components/user/UserList.tsx";

const UsersPage = () => {
    return (
        <div>
            <Menu/>
            <UserList/>
        </div>
    );
};

export default UsersPage