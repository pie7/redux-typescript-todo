import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editTask, addTask } from "../reducers/todo";

const TaskInput = ({ currentInput = '', editTask = null, addTask = null }) => {
    return (
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
    )
}

TaskInput.propTypes = {
    currentInput: PropTypes.string.isRequired,
    editTask: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired
}

export default connect(
    state => ({
        currentInput: state.currentInput
    }),
    dispatch => ({
        editTask: (e) => dispatch(editTask(e)),
        addTask: (e, currentInput) => dispatch(addTask(e, currentInput))
    })
)(TaskInput)