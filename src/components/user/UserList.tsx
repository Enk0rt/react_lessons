import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.tsx";
import {dataService} from "../../api/getApiData.tsx";
import {IUsersResponse} from "../../models/IUsersResponse.tsx";
import {useSearchParams} from "react-router-dom";
import {User} from "./User.tsx";
import Pagination from "../pagination/Pagination.tsx";

export const UserList = () => {
    const [query] = useSearchParams();
    const [total, setTotal] = useState<number>(0)
    const [users, setUsers] = useState<IUser[]>([])
    const skip: number = Number(query.get('skip'));
    useEffect(() => {
        dataService.getUsers(skip, 10)
            .then(({users,total}: IUsersResponse) => {
                setUsers(users);
                setTotal(total);
            });
            }, [skip]);

return (
    <div className={'mt-6'}>
        {
            users.map(user => <User key={user.id} item={user}/>)

        }
        <Pagination skip={skip} total={total}/>
    </div>
);
}

;

