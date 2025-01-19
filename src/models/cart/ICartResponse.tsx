import {ICart} from "./ICart.tsx";

export interface ICartResponse {
    carts: ICart[];
    total: number;
    skip: number;
    limit: number;
}