import {IUser} from "../../models/user/IUser.tsx";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

type UserTypeProps={
    user:IUser,
}

export const User:FC<UserTypeProps> = ({user}:UserTypeProps) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/users/cart/' + user.id, {state:user})
    }

    return (
        <div className={'flex flex-col'}>
            <div className={'flex justify-between flex-wrap'}>
                <div className={'flex flex-col gap-2 '}>
                    <h2 className={'underline underline-offset-2'}>{user.firstName} {user.lastName} {user.age}</h2>
                    <p>Phone - {user.phone}</p>
                    <p>{user.email}</p>
                    <p>{user.birthDate}</p>
                </div>
                <img src={user.image} alt={user.firstName}/>
            </div>
            <button className={'h-8 bg-emerald-700 bg-opacity-30 rounded-xl'} onClick={handleOnClick}>Cart</button>
        </div>
    );
};

