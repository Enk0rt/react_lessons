import {IUser} from "../../models/users/IUser.ts";
import {FC} from "react";

export type MyPropType={
    item:IUser
}

export const User:FC<MyPropType> = ({item}:MyPropType) => {
    return (
        <div className='flex justify-between w-full h-full  bg-green-300 bg-opacity-40 p-5 border text-black'>
            <div>
                <h3 className='underline underline-offset-2'>USER ID - {item.id}</h3>
                <h3>Name:{item.firstName} {item.lastName} </h3>
                <p>Age:{item.age}</p>
                <p>Phone:{item.phone}</p>
                <p>Email:{item.email}</p>
            </div>
            <img src={item.image} alt={item.firstName}/>
        </div>
    );
};

