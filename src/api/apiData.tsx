
import {baseUrl, data} from "../constants/const.ts";
import {IUserResponse} from "../models/user/IUserResponse.tsx";
import {ICartResponse} from "../models/cart/ICartResponse.tsx";

export const dataService = {
    getUsers: async ():Promise<IUserResponse> => {
        return await fetch(data.users).then(response => response.json())
    },
    getCarts:async (id:number):Promise<ICartResponse> =>{
        return await fetch(baseUrl+ '/carts' +'/user/' + id).then(response => response.json())
    }
}