import { useTodo } from "./TodoContext";

const Todo = () => {
    const { todos, del } = useTodo();

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.todoContent} <button onClick={() => del(todo.id)}>del</button></li>
                ))}
            </ul>
        </>
    )
};

export default Todo;