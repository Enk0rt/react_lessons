
import {baseUrl, data} from "../constants/const.ts";

export const dataService = {
    getUsers: async () => {
        return await fetch(data.users).then(response => response.json())
    },
    getCarts:async (id:number)=>{
        return await fetch(baseUrl+ '/carts' +'/user/' + id).then(response => response.json())
    }
}