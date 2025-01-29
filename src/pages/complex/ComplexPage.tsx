
import {UserFull} from "../../components/user/user-full/UserFull.tsx";
import {useGetAll} from "./useGetAll.tsx";


export const ComplexPage = () => {
   const {users} = useGetAll();
    return (
        <div>
            {
                users.map(user => <UserFull key={user.id} item={user}/>)
            }
        </div>
    );
};

