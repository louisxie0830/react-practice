import { useState} from "react";
import { useTodo } from "./TodoContext";


const TodoForm = () => {
    const { add } = useTodo();
    const [todoContent, setTodoContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!todoContent) {
            return;
        }
        add(todoContent);
        setTodoContent('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todoContent} onChange={(e) => setTodoContent(e.target.value)}></input>
        </form>
    )
};

export default TodoForm;