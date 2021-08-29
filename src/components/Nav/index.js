import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
  return (
    <header >
        <h2>
            <a href="/">
                <span role="img" aria-label="globe">🌍</span>Marykate's Portfolio
            </a>
            <a href="#about">
               Marykate Smith
            </a>
          <nav>
            <a href="#project">
              Projects
            </a>
            <a href="#contact">
              Contact
            </a>
            <a href="Resume">
              Resume
            </a>
          </nav>
        </h2>

    </header>
  );
}

export default Nav;
