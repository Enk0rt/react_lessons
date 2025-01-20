import {IUser} from "../../models/IUser.tsx";
import {FC} from "react";

type Props = {
    item:IUser,
}

export const User:FC<Props> = ({item}:Props) => {
    return (
        <div>
            <h3>{item.firstName} {item.lastName} --- {item.id}</h3>
        </div>
    );
};

