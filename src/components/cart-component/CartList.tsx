import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../../models/cart-model/ICart.ts";
import {getData} from "../../api/apiData.ts";
import {ICartsResponse} from "../../models/cart-model/ICartsResponse.ts";
import {Cart} from "./Cart.tsx";

export const CartList = () => {

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
                carts.map(cart => <Cart key={cart.id} item={cart}/>)
            }
        </div>
    );
};

