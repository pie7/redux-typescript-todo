import React from 'react';
import PropTypes from "prop-types";
import { Dispatch, AnyAction } from 'redux';
import { connect } from "react-redux";
import { deleteTask } from "../../reducers/todo";
import styles from "./DeleteButton.module.scss";

interface Props {
    id: number;
    deleteTask: (id: number) => void;
}


export const DeleteButton: React.FC<Props> = ({ deleteTask, id = 0 }) => {
    return (
        <div className={styles.__delete}>
            <span
                className={styles.icon}
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
    (dispatch: Dispatch<AnyAction>) => ({
        deleteTask: (id: number) => dispatch(deleteTask(id))
    })
)(DeleteButton)