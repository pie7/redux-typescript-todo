import React from "react";
import PropTypes from "prop-types";

const Header = ({ title = '' }) => {
    return (
        <header className="todo__title">
            {title}
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header