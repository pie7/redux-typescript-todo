import React from "react";
import PropTypes from "prop-types";
import { Dispatch, AnyAction } from 'redux';
import { connect } from "react-redux";
import { keyinInput, addTask } from "../reducers/todo";
import styles from "./TaskInput.module.scss";

interface Props {
    currentInput: string,
    addTask: (e: any, currentInput: string) => void,
    keyinInput: any
}

const TaskInput: React.FC<Props> = ({ currentInput = '', keyinInput = null, addTask }) => {
    return (
        <div className={styles.input__wrap}>
            <input
                type="text"
                className={styles.__input}
                placeholder="What Needs Be Done?"
                value={currentInput}
                onChange={(e) => keyinInput(e)}
                onKeyDown={(e) => addTask(e, currentInput)}
            />
        </div>
    )
}

TaskInput.propTypes = {
    currentInput: PropTypes.string.isRequired,
    keyinInput: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired
}

export default connect(
    (state: Props) => ({
        currentInput: state.currentInput
    }),
    (dispatch: Dispatch<AnyAction>) => ({
        keyinInput: (e: any) => dispatch(keyinInput(e)),
        addTask: (e: any, currentInput: string) => dispatch(addTask(e, currentInput))
    })
)(TaskInput)