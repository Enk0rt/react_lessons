import {Todo} from "../todo/Todo.tsx";
import { useEffect, useState} from "react";
import {ITodo} from "../../models/todo/Todo.ts";
import {ITodosResponse} from "../../models/todo/ITodosResponse.ts";
import {getData} from "../../api/getData.ts";


export const Todolist = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        getData()
            .then(({todos}:ITodosResponse) => setTodos(todos))
    }, []);

    return (
        <div>
            {
                todos.map(todo => <Todo key={todo.id} item={todo}/>)
            }
        </div>
    );
};

