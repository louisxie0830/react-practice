import { createContext, useContext, useReducer } from 'react';
import TodoReducer, { ACTIONS, initState } from './TodoReducer';

const todoObj = (todoContent) => {
    return {
        id: Math.floor(Math.random() * 100000),
        todoContent,
        complete: false,
    };
};

export const TodoContext = createContext(initState);

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initState);

    const add = (todoContent) => {
        const todo = todoObj(todoContent);
        const newTodo = state.todos.concat(todo);

        dispatch({
            type: ACTIONS.ADD,
            payload: {
                todo: newTodo,
            },
        });
    };

    const toggle = (id) => {
        const newTodo = state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, complete: !todo.complete };
            }
        });
        
        dispatch({
            type: ACTIONS.TOGGLE,
            payload: {
                todo: newTodo,
            },
        });
    };
    
    const del = (id) => {
        const newTodo = state.todos.filter((todo) => todo.id !== id);

        dispatch({
            type: ACTIONS.DELETE,
            payload: {
                todo: newTodo,
            },
        });
    };
    
    const value = {
        todos: state.todos,
        add,
        toggle,
        del
    };
    
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
    const context = useContext(TodoContext);
    
    if(!context) console.error('todoContext error');
    
    return context;
}