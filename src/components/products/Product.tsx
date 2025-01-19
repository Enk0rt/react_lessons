import {IProduct} from "../../models/product/IProduct.tsx";
import {FC} from "react";

type ProductPropsType = {
    product: IProduct,
    index:number,
}

export const Product:FC<ProductPropsType> = ({product,index}) => {
        return (
            <div>
                <h2 className={'mt-3 text-3xl'}>{index}. {product.title} - {product.price} ({product.quantity} шт)</h2>
            </div>
        );
};

