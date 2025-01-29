import {IUser} from "../../../models/user/IUser.ts";

interface UserProps {
    item: IUser
}

export const User = ({item}: UserProps) => {
    return (
        <div>
            {item.id} -- {item.name}
        </div>
    );
};

export default User;