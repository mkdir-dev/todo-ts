import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper blue darken-2 px1">
          <NavLink to="/" className="brand-logo">
            Todo
          </NavLink>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Список дел</NavLink></li>
            <li><NavLink to="/about">О нас</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
