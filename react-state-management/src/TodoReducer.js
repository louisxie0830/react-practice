export const initState = {
    todos: [],
};

export const ACTIONS = {
    ADD: 'ADD',
    TOGGLE: 'TOGGLE',
    DELETE: 'DELETE',
};

const TodoReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.ADD:
            return {
                ...state,
                todos: payload.todo,
            };

        case ACTIONS.TOGGLE:
            return {
                ...state,
                todos: payload.todo,
            };
            
        case ACTIONS.DELETE:
            return {
                ...state,
                todos: payload.todo
            }

        default:
            return state;
    }
};


export default TodoReducer;