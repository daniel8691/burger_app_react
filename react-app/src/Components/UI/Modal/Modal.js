import React from 'react';

import './Modal.css'

const modal = (props) => (
    <div className="Modal">
        {/* can be anything (text/paragraph) */}
        {props.children}

    </div>
);


export default modal;