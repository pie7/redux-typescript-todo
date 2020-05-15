import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from "./Navigation.module.scss";
import { NavLink } from "../../types";

interface Props {
    tabs?: NavLink[];
    status: string;
}

export const Navigation: React.FC<Props> = ({ tabs = [], status }) => {
    return (
        <div className={styles.__navigation}>
            {tabs && tabs.map((tab, index) =>
                <div className={`${styles.__link} ${status === tab.title ? styles['--indicator']: ''}`} key={`${index}_${tab.title}`}>
                    <Link to={tab.path}>
                        {tab.title}
                    </Link>
                </div>
            )}
        </div>
    )
}

Navigation.propTypes = {
    tabs: PropTypes.array.isRequired
}

export default connect(
    (state: Props) => ({ tabs: state.tabs }),
    null
)(Navigation)