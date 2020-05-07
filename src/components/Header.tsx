import React from "react";
import PropTypes from "prop-types";

interface Props {
    title: string;
}

const Header: React.FC<Props> = ({ title }) => {
    return (
        <header className="todo__title">
            {title}
        </header>
    )
}

Header.defaultProps = {
    title: ''
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header