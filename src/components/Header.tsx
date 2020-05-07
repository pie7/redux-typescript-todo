import React from "react";
import PropTypes from "prop-types";
import styles  from "./Header.module.scss";

interface Props {
    title: string;
}

const Header: React.FC<Props> = ({ title }) => {
    return (
        <header className={styles.title}>
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