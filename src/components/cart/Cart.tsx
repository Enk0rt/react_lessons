import {ICart} from "../../models/cart/ICart.tsx";
import {FC} from "react";
import {ProductsList} from "../products/ProductsList.tsx";
import {useLocation} from "react-router-dom";
import {IUser} from "../../models/user/IUser.tsx";

type CartPropsType ={
    cart:ICart,
}

export const Cart:FC<CartPropsType> = ({cart}) => {
    const {state} = useLocation()
    const user = state as IUser;

    return (
        <div className={'mt-6 w-4/5 mx-auto'}>
            <div className={'flex justify-between items-baseline'}>
                <h2 className={'text-7xl'}>Cart | {user.id}. {user.firstName} {user.lastName}</h2>
                <p className={' text-5xl'}>Total - {cart.total}$</p>
            </div>
                <ProductsList/>
        </div>
    );
};

