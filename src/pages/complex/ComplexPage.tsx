
import {useGetAll} from "./useGetAll.tsx";
import {UserComplex} from "../../components/user/user-complex/UserFull.tsx";


export const ComplexPage = () => {
   const {users} = useGetAll();
    return (
        <div>
            {
                users.map(user => <UserComplex key={user.id} item={user}/>)
            }
        </div>
    );
};

