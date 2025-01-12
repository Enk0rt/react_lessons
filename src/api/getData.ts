import {ITodosResponse} from "../models/todo/ITodosResponse.ts";

export const getData = async ():Promise<ITodosResponse>=> {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json());
}