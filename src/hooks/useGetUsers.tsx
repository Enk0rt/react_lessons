import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.tsx";
import {apiData} from "../api/Data/getData.ts";

export const useGetUsers = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        apiData.getData().then((users:IUser[])=> setUsers(users));
    }, []);

    return {users,setUsers}
}