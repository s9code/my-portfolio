import React, { useState } from 'react';
import './navbar.css';
import Menu from '../../asset/icon-menu.png';

const Header = () => {
  
  /* Toggle Menu */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <section className='nav'>
      <nav className="nav__container">
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#body" onClick={() => setActiveNav('#body')} className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}>
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#portfolio' ? 'nav__link active-link' : 'nav__link'}>
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>


        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <img className='menu-item' width="35" height="35" src={Menu} alt="hamburger"/>
        </div> 
      </nav>
    </section>
  )
}

export default Header