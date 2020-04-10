import React from 'react';
import { connect } from "react-redux";
import { deleteTask } from "../reducers/todo";

const DeleteButton = ({ deleteTask, id }) => {
    return (
        <div className="todo__delete">
            <span
                className="delete__icon"
                onClick={() => deleteTask(id)}>
                x
            </span>
        </div>
    )
}

export default connect(
    null,
    (dispatch) => {
        return {
            deleteTask: (id) => dispatch(deleteTask(id))
        }
    }
)(DeleteButton)