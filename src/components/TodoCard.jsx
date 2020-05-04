import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleTask } from "../reducers/todo";
import DeleteButton from "./DeleteButton";

const TodoCard = ({ id = 0, title = '', isComplete = false, toggleTask = null }) => {
    return (
        <div className="card__container">
            <div className="todo__card">
                <div className="todo__select">
                    <div className="select__wrap">
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
                <div className="todo__info">
                    <span className={`info__title${isComplete ? "--complete" : " "}`}>
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
    isComplete: PropTypes.bool.isRequired,
    toggleTask: PropTypes.func.isRequired
}

export default connect(
    (state, ownProps) => {
        const todo = state.todos.filter(todo => todo.id === ownProps.id)
        const [todoItems] = todo

        return {
            title: todoItems.title,
            isComplete: todoItems.isComplete
        }
    },
    (dispatch) => {
        return {
            toggleTask: (id, isComplete) => dispatch(toggleTask(id, isComplete)),
        }
    }
)(TodoCard)