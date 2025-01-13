import {useEffect, useState} from "react";
import {dataApi} from "../../api/dataApi.ts";
import {IUser} from "../../models/users/IUser.ts";
import {IUserResponse} from "../../models/users/IUsersResponse.ts";
import {urls} from "../../const/const.ts";
import {User} from "../user/User.tsx";

export const UsersList = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        dataApi(urls.users).then(({users}:IUserResponse) => setUsers(users))
    }, []);
    return (
        <div className='mt-14 wrapper'>
            <div className='grid grid-cols-2 w-full gap-20 justify-items-center align-middle mx-auto'>
                {
                    users.map(user => <User key={user.id} item={user}/>)
                }
            </div>
        </div>
    );
};
