import React from 'react';
import { connect } from "react-redux";
import { addTask, editTask, deleteTask,  toggleTask} from "../reducers/todo";
import TodoCard from "./TodoCard";
import AddButton from "./AddButton";
import "./todo.scss";

const TodoContainer = ({todos, toggleTask}) => {
    return (
        <div className="todo__container">
            <header className="todo__title">
                ToDoList
            </header>
            {todos &&
                todos.map(todo =>
                    <TodoCard
                        key={todo.id}
                        id={todo.id}
                    />
                )
            }
            <AddButton />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        currentInput: state.currentInput
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: () => dispatch(addTask),
        editTask: (e) => dispatch(editTask(e)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer)