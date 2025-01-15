import {IUser} from "../../models/user-model/IUser.ts";
import {useNavigate} from "react-router-dom";

export type MyPropType = {
    item: IUser;
}

export const User= ({item}:MyPropType) => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate(item.id + '/carts', {state: item})
    }

    return (
        <div className='flex flex-col justify-between border rounded-xl p-3 bg-emerald-900 bg-opacity-20'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-2'>
                    <h2>ID - <span id='user-id'>{item.id}</span> | Name: <span
                        className='font-bold'>{item.firstName} {item.lastName}</span></h2>
                    <p>Age: {item.age} | Gender: {item.gender} | Birthday: {item
                        .birthDate}</p>
                    <p>Email: {item.email}</p>
                    <p>Phone: {item.phone}</p>
                </div>
                <img className='block self-start' src={item.image} alt={item.firstName}/>
            </div>
            <button onClick={handleOnClick} className='w-full border mt-3 '>Cart</button>
        </div>
    );

}
