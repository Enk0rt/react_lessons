import {IUser} from "./IUser.tsx";

export interface IUsersResponse{
    users: IUser[],
    total:number,
    skip:number,
    limit:number
}