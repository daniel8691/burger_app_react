import React from 'react';

// up two folders
import Aux from '../HOC/Aux1';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>

);


export default layout;