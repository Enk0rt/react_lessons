import {Product} from "./Product.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../../models/cart/ICart.tsx";
import {dataService} from "../../api/apiData.tsx";
import {ICartResponse} from "../../models/cart/ICartResponse.tsx";

export const ProductsList = () => {
    const {id} = useParams()
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
           if(id){
               dataService.getCarts(+id).then(({carts}:ICartResponse)=>setCarts(carts))
           }
    }, [id]);
    return (
        <div className={' w-2/4 mt-6 border border-black p-5 bg-white bg-opacity-10 rounded-3xl'}>
            {
                carts.map(cart => cart.products.map((product,index) => <Product key={product.id} product ={product} index={index+1}/>))
            }
        </div>
    );
};

