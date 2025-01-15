import {useEffect, useState} from "react";
import {ICart} from "../../models/cart-model/ICart.ts";
import {getData} from "../../api/apiData.ts";
import {useParams} from "react-router-dom";
import {ICartsResponse} from "../../models/cart-model/ICartsResponse.ts";
import {Product} from "./Product.tsx";

export const ProductList = () => {
    const {id} = useParams()
    const [carts, setCarts] = useState<ICart[]>([])

    useEffect(() => {
       if(id){
           getData.carts(id).then(({carts}:ICartsResponse) => setCarts(carts))
       }
    }, [id]);

    return (
        <div>
            {
                (id && carts.map(cart=>  cart.products.map((product,index) => <Product index={index+1} product={product}/>)))
            }
        </div>
    );
};

