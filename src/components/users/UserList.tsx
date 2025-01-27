import {User} from "../user/User.tsx";
import {useGetUsers} from "../../hooks/useGetUsers.tsx";

export const UserList = () => {

    const {users} = useGetUsers();

    return (
        <div>
            {
                users.map(user => <User key={user.id} item={user}/>)
            }
        </div>
    );
};

