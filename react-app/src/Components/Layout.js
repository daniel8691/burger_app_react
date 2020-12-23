import React from 'react';

// up two folders
import Aux from '../HOC/Aux1';
// import the css
import './Layout.css';


const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>

);


export default layout;