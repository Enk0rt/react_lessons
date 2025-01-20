import {urls} from "../routes/const.ts";
import {IUsersResponse} from "../models/IUsersResponse.tsx";

export const dataService = {
    getUsers: async (skip:number,limit:number):Promise<IUsersResponse> =>{
      return await fetch(urls.users+'?skip=' +skip+'&limit='+limit).then(response => response.json())
    }
}