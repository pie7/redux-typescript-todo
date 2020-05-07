export interface Todo {
    id: number;
    title: string;
    context: string;
    isComplete: boolean
}

export interface TodoState {
    todos: Todo[];
    currentInput: string
}


export interface StoreState {
    todos: Todo[];
    currentInput: string;
}


