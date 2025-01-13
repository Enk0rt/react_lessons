import {IReactions} from "./IReactions.ts";

export interface IPost {
    id: number;
    title: string;
    body: string;
    reactions:IReactions
}