import React from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { editTask, addTask, showStatus } from "../reducers/todo";
import TodoCard from "./TodoCard";
import Navigation from "./Navigation";
import "./todo.scss";

const TodoContainer = ({todos, editTask, currentInput, addTask}) => {
    return (
        <div className="todo__container">
            <header className="todo__title">
                ToDoList
            </header>
            <Navigation />
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
            <Route path="/:status" render={
                ({ match }) => {
                    const filterTodos = showStatus(todos, match.params.status)
                    return filterTodos && filterTodos.map(todo =>
                        <TodoCard
                            key={todo.id}
                            id={todo.id}
                        />
                    )
                }
            } />
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
        editTask: (e) => dispatch(editTask(e)),
        addTask: (e, currentInput) => dispatch(addTask(e, currentInput))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer)