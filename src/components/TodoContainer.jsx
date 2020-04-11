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
            <div className="input__wrap">
                <input
                    type="text"
                    className="todo__input"
                    placeholder="What Needs Be Done?"
                    value={currentInput}
                    onChange={(e) => editTask(e)}
                    onKeyDown={(e) => addTask(e, currentInput)}
                />
            </div>
            <div className="todos__wrap">
                {todos &&
                    todos.map(todo =>
                        <TodoCard
                            key={todo.id}
                            id={todo.id}
                        />
                    )
                }
            </div>
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