import {ITodo} from "./Todo.ts";

export interface ITodosResponse{
    todos:ITodo[],
    total:number,
    skip:number,
    limit:number
}