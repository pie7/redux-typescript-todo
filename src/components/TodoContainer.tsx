import React from 'react';
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { showStatus } from "../reducers/todo";
import Header from "./Header";
import TaskInput from "./TaskInput";
import TodoCard from "./TodoCard";
import Navigation from "./Navigation";
import { StoreState, Todo, TodoState } from "../types/index";
import "./todo.scss";

interface Props {
    todos?: Todo[];
}

const TodoContainer: React.FC<Props> = ({ todos = [] }) => {
    return (
        <div className="todo__container">
            <Header title={'ToDoList'} />
            <Navigation />
            <TaskInput />
            <div className="card__wrap">
                <Switch>
                    <Route exact path="/">
                        {todos && todos.map((todo) =>
                            <TodoCard
                                key={todo.id}
                                id={todo.id}
                                title={''}
                                isComplete={false}
                                toggleTask={() => {}}
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
                                    title={''}
                                    isComplete={false}
                                    toggleTask={() => {}}
                                />
                            )
                        }
                    } />
                </Switch>
            </div>
        </div>
    )
}

TodoContainer.propTypes = {
    todos: PropTypes.array.isRequired
}

export default connect(
    (state: Props) => ({ todos: state.todos }),
    null
)(TodoContainer)