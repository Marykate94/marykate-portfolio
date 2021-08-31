import React, { useState } from 'react';
import Navigation from '../Nav';

function Header(props){



    return(
        <div className = 'header text-center'>
            <h1>
                Marykate Smith
            </h1>
            <Navigation setCurrentPage={props.setCurrentPage}/>
        </div>
    )

}

export default Header;