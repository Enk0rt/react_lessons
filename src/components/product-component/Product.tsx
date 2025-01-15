import {IProduct} from "../../models/cart-model/ICart.ts";

type MyPropProductType ={
    product:IProduct;
    index:number
}

export const Product = ({product,index}:MyPropProductType) => {
    return (
        <div className={'first:mt-6'}>
            <h2 className={'mt-1'}> {index} - {product.title} - {product.price} {product.quantity}шт</h2>
        </div>
    );
};

