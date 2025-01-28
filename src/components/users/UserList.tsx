import {User} from "../user/User.tsx";
import {useGetData} from "../../hooks/useGetData.tsx";
import {apiData} from "../../api/Data/getData.ts";

export const UserList = () => {

    const {data} = useGetData(apiData.getData,[]);

    return (
        <div>
            {
                data.map(user => <User key={user.id} item={user}/>)
            }
        </div>
    );
};

