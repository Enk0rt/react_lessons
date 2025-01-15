import {urls} from "../constants/const.ts";

export const getData = {
    allUsers: async () => {
        return await fetch(urls.users).then(response => response.json()
    )},
    carts: async (id:string) => {
        return await fetch(import.meta.env.VITE_API_URL+'/carts/user/' + id).then(response => response.json())
    },
}

