import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

export type MyPropType={
    item:IUser
}

const User:FC<MyPropType> = ({item}:MyPropType) => {
    return (
        <div className='w-1/4 text-center mt-5'>
            <h3>USER ID - {item.id}</h3>
            <p>{item.firstName} {item.lastName}</p>
        </div>
    );
};

export default User;