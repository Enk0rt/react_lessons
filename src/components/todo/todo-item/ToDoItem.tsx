import {FC} from "react";
import {ITodo} from "../../../models/todo-model/Todo.ts";

interface TodoProps{
    item:ITodo
}

export const ToDoItem:FC<TodoProps> = ({item}:TodoProps) => {
    return (
            <div className='mt-14 first:mt-0'>
                <h2 className='text-3xl font-bold bg-amber-500 text-black'>id - {item.id}, to do
                    - {item.title}</h2>
                <p className='text-3xl font-bold  mt-5'>Status - {`${item.completed}`}</p>
            </div>
    );
};
