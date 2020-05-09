import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleTask } from "../reducers/todo";
import DeleteButton from "./DeleteButton";
import { StoreState, Todo, TodoState } from "../types/index";
import { Dispatch, AnyAction } from 'redux';
import styles from "./TodoCard.module.scss";

interface Props {
    id: number;
    title: string;
    isComplete?: boolean;
    toggleTask: (id: number, isComplete: boolean) => void
}

const TodoCard: React.FC<Props>= ({
    id = 0,
    title = '',
    isComplete = false,
    toggleTask
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.__select}>
                    <div className={styles.__wrap}>
                        <input
                            type="checkbox"
                            className="todo__checkbox"
                            id={`checkbox--${id}`}
                            checked={isComplete}
                            onChange={() => toggleTask(id, isComplete)}
                        />
                        <label htmlFor={`checkbox--${id}`}></label>
                    </div>
                </div>
                <div className={styles.info}>
                    <span className={`${styles.info__title} ${isComplete ? `${styles['info--complete']}` : " "}`}>
                        {title}
                    </span>
                </div>
                <DeleteButton id={id} />
            </div>
        </div>
    )
}

TodoCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool,
    toggleTask: PropTypes.func.isRequired
}

export default connect(
    (state: TodoState, ownProps: { id: number }): { title: string, isComplete: boolean } => {
        const todo = state.todos.filter(todo => todo.id === ownProps.id)
        const [todoItems] = todo

        return {
            title: todoItems.title,
            isComplete: todoItems.isComplete
        }
    },
    (dispatch: Dispatch<AnyAction>) => {
        return {
            toggleTask: (id: number, isComplete: boolean) => dispatch(toggleTask(id, isComplete)),
        }
    }
)(TodoCard)