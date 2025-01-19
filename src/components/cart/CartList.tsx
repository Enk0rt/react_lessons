import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../../models/cart/ICart.tsx";
import {dataService} from "../../api/apiData.tsx";
import {ICartResponse} from "../../models/cart/ICartResponse.tsx";
import {Cart} from "./Cart.tsx";

export const CartList = () => {
    const {id} = useParams()
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        if(id){
            dataService.getCarts(+id).then(({carts}:ICartResponse)=> setCarts(carts))
        }
    }, [id]);

    return (
        <div>
            {
                carts.map(cart => <Cart key={cart.id} cart={cart}/>)
            }
        </div>
    );
};

