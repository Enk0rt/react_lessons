import {ITodo} from "../../models/todo/Todo.ts";
import {FC} from "react";

interface TodoProps{
    item:ITodo;
}

export const Todo:FC<TodoProps> = ({item}:TodoProps) => {
    return (
        <div className='mt-10 first:mt-0 bg-amber-200 text-black p-10'>
            <h2>USER:{item.userId}</h2>
            <h3 className='mt-2' >id - {item.id}, {item.todo}</h3>
            <p>{`Status - ${item.completed}`}</p>
        </div>
    );
};

