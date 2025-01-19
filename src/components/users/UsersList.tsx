import {User} from "./User.tsx";
import {useEffect, useState} from "react";
import {IUser} from "../../models/user/IUser.tsx";
import {dataService} from "../../api/apiData.tsx";
import {IUserResponse} from "../../models/user/IUserResponse.tsx";

export const UsersList = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        dataService.getUsers().then(({users}:IUserResponse) => setUsers(users))
    }, []);


    return (
        <div className={'grid grid-cols-2 gap-10 justify-center content-center w-4/5 mx-auto mt-10'}>
            {
                users.map(item=> <User key={item.id} user={item}/>)
            }
        </div>
    );
};

