import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTask } from "../reducers/todo";

const DeleteButton = ({ deleteTask = null, id = 0 }) => {
    return (
        <div className="todo__delete">
            <span
                className="delete__icon"
                onClick={() => deleteTask(id)}>
                ✖
            </span>
        </div>
    )
}

DeleteButton.propTypes = {
    deleteTask: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}

export default connect(
    null,
    (dispatch) => ({
        deleteTask: (id) => dispatch(deleteTask(id))
    })
)(DeleteButton)