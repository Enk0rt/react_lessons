import {IUser} from "./IUser.tsx";

export interface IUserResponse{
	users: IUser[],
	total:number,
	skip:number,
	limit:number
}