import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <div className="todo__navigation">
            <Link to="/all">All</Link>
            <Link to="/started">Started</Link>
            <Link to="/completed">Completed</Link>
        </div>
    )
}
export default Navigation