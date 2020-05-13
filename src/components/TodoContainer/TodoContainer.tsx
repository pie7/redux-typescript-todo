import React from 'react';
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { showStatus } from "../../reducers/todo";
import Header from "../Header/Header";
import TaskInput from "../TaskInput/TaskInput";
import TodoCard from "../TodoCard/TodoCard";
import Navigation from "../Navigation/Navigation";
import { Todo } from "../../types/index";
import styles from "./TodoContainer.module.scss";

interface Props {
    todos?: Todo[];
}

export const TodoContainer: React.FC<Props> = ({ todos = [] }) => {
    return (
        <div className={styles.__container}>
            <Header title={'ToDoList'} />
            <Navigation />
            <TaskInput />
            <ul className={styles.__wrap}>
                <Switch>
                    <Route exact path="/">
                        {todos && todos.map((todo) =>
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
            </ul>
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