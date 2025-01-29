import {IUser} from "../../../models/user/IUser.ts";
import {memo} from "react";

interface UserProps {
    item: IUser
}

export const User = memo(({item}: UserProps) => {
    return (
        <div>
            {item.id} -- {item.name}
        </div>
    );
})