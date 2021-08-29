import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
  return (
    <header >
        <h2>
            <a href="/">
                <span role="img" aria-label="globe">  🌍</span>
            </a>
        </h2>

    </header>
  );
}

export default Nav;
