import React from 'react';

function Nav(props) {
  return (
    <header >
        <h2>
            <a href="/">
                <span role="img" aria-label="globe">🌍</span>Marykate's Portfolio
            </a>
            <a href="#about">
               About Me
            </a>
          <nav>
          <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#About" onClick={() => {props.setCurrentPage("About")}}>About <span class="sr-only"></span></a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#Projects" onClick={() => {props.setCurrentPage("Projects")}}>Projects <span class="sr-only"> </span></a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#Contact"  onClick={() => {props.setCurrentPage("Contact")}}>Contact</a>
        <link to={"./Contact"}></link>
      </li>
    </ul>
          </nav>
        </h2>

    </header>
  );
}

export default Nav;
