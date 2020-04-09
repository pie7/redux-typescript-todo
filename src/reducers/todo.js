// Actions
const ADD = 'redux-typescript/todo/ADD'
const EDIT = 'redux-typescript/todo/EDIT'
const DELETE = 'redux-typescript/todo/DELETE'
const COMPLETE = 'redux-typescript/todo/COMPLETE'


const initialState = {
    "todos": [
        {
            "id": 1,
            "title": "Going Home",
            "context": "driving and go highway 101",
            "isComplete": false
        },
        {
            "id": 2,
            "title": "Going Home2",
            "context": "driving and go highway 001",
            "isComplete": false
        },
        {
            "id":3,
            "title": "Going Home3",
            "context": "driving and go highway 033",
            "isComplete": false
        },
    ]
}

// Reducer
export default function rootReducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            }
        case EDIT:
            return {
                ...state
            }
        case DELETE:
            return {
                ...state
            }
        case COMPLETE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id
                        ? { ...todo, isComplete: !action.payload.isComplete }
                        : todo
                )
            }
        default: return state
    }
}

// Action Creators
export function addTask() {
    return { type: ADD }
}

export function editTask() {
    return { type: EDIT }
}

export function deleteTask() {
    return { type: DELETE }
}

export function toggleTask(id, isComplete) {
    return { type: COMPLETE, payload: { id, isComplete } }
}