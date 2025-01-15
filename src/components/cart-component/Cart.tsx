import {ICart} from "../../models/cart-model/ICart.ts";
import {ProductList} from "../product-component/ProductList.tsx";

type MyCartPropType = {
    item:ICart
}

export const Cart = ({item}:MyCartPropType) => {

    return (
        <div className='w-1/2 bg-emerald-900 bg-opacity-100 fixed top-12 right-0 translate-x-full p-5 appear'>
            <h2 className='text-xl'>Cart | User: {item.userId}</h2>
            <p>Total products - {item.totalProducts}</p>
            <ProductList/>
            <p className='mt-6'>Total - {item.total}</p>
        </div>
    );
};

