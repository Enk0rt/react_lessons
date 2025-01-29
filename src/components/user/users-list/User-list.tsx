import {User} from "../user-item/User.tsx";
import {userSliceActions} from "../../../redux/slices/user-slice/UserSlice.ts";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";

export const UserList = () => {

    const {users} = useAppSelector(({userSlice}) => userSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(!users.length) dispatch(userSliceActions.loadUsers())
    }, []);

    return (
        <div>
            {
                users.map(user=><User key={user.id} item={user} />)
            }
        </div>
    );
};

