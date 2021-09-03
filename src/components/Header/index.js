import React, { useState } from 'react';
import Navigation from '../Nav';
import './style.css';

function Header(props){



    return(
        <div className = 'header text-center'>
            <h1 id="header">
                Marykate Smith
            </h1>
            <Navigation setCurrentPage={props.setCurrentPage}/>
        </div>
    )

}

export default Header;