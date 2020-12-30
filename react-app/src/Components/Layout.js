import React from 'react';

// up two folders
import Aux from '../HOC/Aux1';
// import the css
import './Layout.css';

// import toolbar
import Toolbar from "../Components/Navigation/Toolbar/Toolbar"

const layout = (props) => (
    <Aux>
        <Toolbar />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>

);


export default layout;