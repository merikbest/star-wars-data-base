import React from "react";
import PropTypes from 'prop-types';

// Создаем свою разметку
const Row = ({leftElement, rightElement}) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {leftElement}
            </div>
            <div className="col-md-6">
                {rightElement}
            </div>
        </div>
    );
};

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};
export default Row;