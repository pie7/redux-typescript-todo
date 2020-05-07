import { TodoState, Todo, StoreState } from "../types/index";

// Actions
const ADD = 'redux-typescript/todo/ADD'
const KEYIN_INPUT = 'redux-typescript/todo/KEYIN_INPUT'
const DELETE = 'redux-typescript/todo/DELETE'
const COMPLETE = 'redux-typescript/todo/COMPLETE'

interface Add {
    type: typeof ADD;
    payload: {
        currentInput: string
    }
}


interface keyinInput {
    type: typeof KEYIN_INPUT;
    payload: any
}

interface Delete {
    type: typeof DELETE;
    payload: {
        id: number
    }
}

interface Complete {
    type: typeof COMPLETE;
    payload: {
        id: number,
        isComplete: boolean
    }
}

type ActionTypes = Add | keyinInput | Delete | Complete


// Action Creators
export function addTask(e: React.KeyboardEvent<HTMLInputElement>, currentInput: string) {
    return e.key === 'Enter'
        ? { type: ADD, payload: { currentInput } }
        : { type: null }
}

export function keyinInput(e: React.ChangeEvent<HTMLInputElement>): ActionTypes {
    return { type: KEYIN_INPUT, payload: { currentInput: e.target.value } }
}

export function deleteTask(id: number) {
    return { type: DELETE, payload: { id } }
}

export function toggleTask(id: number, isComplete: boolean) {
    return { type: COMPLETE, payload: { id, isComplete } }
}

export const showStatus = (todos: Array<Todo>, status: string) => {
    switch (status) {
        case 'started':
            return todos && todos.filter(todo => todo.isComplete === false)
        case 'completed':
            return todos && todos.filter(todo => todo.isComplete === true)
        default:
            return todos
    }
}

const initialState: StoreState = {
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
        }
    ],
    "currentInput": ""
}

// Reducer
export default function rootReducer(state = initialState, action: ActionTypes) {
    switch (action.type) {
        case ADD:
            const currentInputTodo = {
                id: state.todos.length + 1,
                title: action.payload.currentInput,
                context: action.payload.currentInput,
                isComplete: false
            }
            return {
                ...state,
                todos: state.todos.concat(currentInputTodo),
                currentInput: ""
            }
        case KEYIN_INPUT:
            return {
                ...state,
                currentInput: action.payload.currentInput
            }
        case DELETE:
            return {
                ...state,
                todos: state.todos.filter(todo =>
                    todo.id !== action.payload.id
                )
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