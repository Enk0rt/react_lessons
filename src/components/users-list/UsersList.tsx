import {useEffect, useState} from "react";
import {dataApi} from "../../api/dataApi.ts";
import {IUser} from "../../models/IUser.ts";
import User from "../user/User.tsx";
import {IUserResponse} from "../../models/IUsersResponse.ts";
import {urls} from "../../const/const.ts";

export const UsersList = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        dataApi(urls.users).then(({users}:IUserResponse) => setUsers(users))
    }, []);
    return (
        <div className='flex flex-wrap w-100 mt-14 justify-center align-middle'>
            {
                users.map(user => <User key={user.id} item={user} />)
            }
        </div>
    );
};
