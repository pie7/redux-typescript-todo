import React from 'react';
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { showStatus } from "../reducers/todo";
import Header from "./Header";
import TaskInput from "./TaskInput";
import TodoCard from "./TodoCard";
import Navigation from "./Navigation";
import "./todo.scss";

const TodoContainer = ({ todos = [] }) => {
    return (
        <div className="todo__container">
            <Header title={'ToDoList'} />
            <Navigation />
            <TaskInput />
            <Switch>
                <Route exact path="/">
                    {todos && todos.map(todo =>
                        <TodoCard
                            key={todo.id}
                            id={todo.id}
                        />
                    )}
                </Route>
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
            </Switch>
        </div>
    )
}

TodoContainer.propTypes = {
    todos: PropTypes.array.isRequired
}

export default connect(
    state => ({ todos: state.todos }),
    null
)(TodoContainer)