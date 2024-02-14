import React, { useState } from 'react';
import './navbar.css';

const Header = () => {
  
  /* Toggle Menu */
  const [Toggle, showMenu] = useState(false);

  return (
    <section className='nav'>
      <nav className="nav__container">
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#h" className="nav__link">About</a>
            </li>
            <li className="nav__item">
              <a href="#h" className="nav__link">Skills</a>
            </li>
            <li className="nav__item">
              <a href="#h" className="nav__link">Projects</a>
            </li>
            <li className="nav__item">
              <a href="#h" className="nav__link">Contact</a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <ion-icon className="menu-outline"></ion-icon>
        </div> 
      </nav>
    </section>
  )
}

export default Header