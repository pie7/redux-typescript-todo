import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

// TODO: Dynamic input use ARRAY

const Navigation = () => {
    return(
        <div className={styles.__navigation}>
            <Link to="/all">All</Link>
            <Link to="/started">Started</Link>
            <Link to="/completed">Completed</Link>
        </div>
    )
}
export default Navigation