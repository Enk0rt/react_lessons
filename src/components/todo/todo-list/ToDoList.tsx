import {useEffect, useState} from "react";
import {getData} from "../../../api/getDataJson.ts";
import {ITodo} from "../../../models/todo-model/Todo.ts";
import {ToDoItem} from "../todo-item/ToDoItem.tsx";

export const ToDoList = () => {
        const DATA_URL_JSON = 'https://jsonplaceholder.typicode.com/todos';
        const [todos,setUsers] = useState<ITodo[]>([])

        useEffect(() => {
                getData(DATA_URL_JSON,setUsers)
        },[])

    return (
        <>
            {
                todos.map(todo => (
                    <ToDoItem key={todo.id} item={todo}/>
                ))
            }
        </>
    );
};

export default ToDoList;