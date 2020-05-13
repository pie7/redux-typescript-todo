import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from "./Navigation.module.scss";
import { NavLink } from "../../types";

interface Props {
    tabs?: NavLink[]
}

export const Navigation: React.FC<Props> = ({ tabs = [] }) => {
    return (
        <div className={styles.__navigation}>
            {tabs && tabs.map((tab, index) =>
                <Link to={tab.path} key={`${index}_${tab.title}`}>
                    {tab.title}
                </Link>
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