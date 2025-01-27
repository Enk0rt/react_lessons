import {IUser} from "../../models/IUser.tsx";


export const apiData = {
    getData: async ():Promise<IUser[]> => {
      return await fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
    }
}