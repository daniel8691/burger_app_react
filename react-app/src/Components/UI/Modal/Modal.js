import React from 'react';

import './Modal.css'
import Aux from '../../../HOC/Aux1'
import Backdrop from '../Backdrop/Backdrop';




const modal = (props) => (
    <Aux>
        <Backdrop show={props.show}
            clicked = {props.modalClosed}/>
    <div 
        className="Modal"
        style={{
            // if true then do this
            // translaeY(0) is the position defined in the CSS
            // -100vh (special unit referrin to viewport height) willl slide the box outside of the screen
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            // if true, show 1, if not, show 0 (not visible)
            opacity: props.show ? '1':'0'
        }}>
        {/* can be anything (text/paragraph) */}
        {props.children}

    </div>
    </Aux>
   
);


export default modal;