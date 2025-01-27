import {IUser} from "../../models/IUser.tsx";

type UserProps={
    item:IUser,
}

export const User = ({item}:UserProps) => {
    return (
        <div>
            <h2>{item.name}</h2>
        </div>
    );
};

