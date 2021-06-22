import React from 'react';
import { FaPizzaSlice, FaPlus } from 'react-icons/fa';
import './header.scss';

const Header = () => (
  <header className="header" data-testid="header">
    <nav className="nav">
      <div className="nav__logo">
        <img src="./images/logo.png" alt="logo" title="logo" />
      </div>
      <ul className="nav__menu">
        <li className="nav__item" data-testid="quick-add-task-action">
          <FaPlus />
        </li>
        <li className="nav__item" data-testid="dark-mode-action">
          <FaPizzaSlice />
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
