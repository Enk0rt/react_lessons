import {useEffect, useState} from "react";
import {IUser} from "../../models/user-model/IUser.ts";
import {IUsersResponse} from "../../models/user-model/IUsersResponse.ts";
import {getData} from "../../api/apiData.ts";
import {User} from "./User.tsx";

export const UsersList = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getData.allUsers().then(({users}:IUsersResponse) => setUsers(users))
    }, []);

    return (
        <div className='grid grid-cols-2 gap-6 w-5/6 mx-auto mt-6'>
            {
                users.map(user => <User key={user.id} item={user}/>)
            }
        </div>
    );
};

