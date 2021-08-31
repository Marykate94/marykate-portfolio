import React, { useState } from 'react';
import Nav from '../Nav';

function Header(props){



    return(
        <div className = 'header'>
            <h1>
                Marykate Smith
            </h1>
            <Nav setCurrentPage={props.setCurrentPage}/>
        </div>
    )

}

export default Header;