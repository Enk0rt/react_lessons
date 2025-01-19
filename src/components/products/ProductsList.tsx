import {FC} from "react";
import {ICart} from "../../models/cart/ICart.tsx";
import {Product} from "./Product.tsx";

type CartPropType = {
    cart:ICart
}

export const ProductsList:FC<CartPropType> = ({cart}) => {

        return (
            <div className={' w-2/4 mt-6 border border-black p-5 bg-white bg-opacity-10 rounded-3xl'}>
                {
                    cart.products.map((product,index) => <Product key={product.id} product={product} index={index+1}/>)
                }
            </div>
        );
};

