import React from 'react';
import { FaPizzaSlice, FaPlus } from 'react-icons/fa';
import './header.scss';

const Header = () => (
  <header data-testid="header">
    <nav>
      <div className="logo">
        <img src="./images/logo.png" alt="logo" title="logo" />
      </div>
      <ul className="menu">
        <li data-testid="quick-add-task-action">
          <FaPlus />
        </li>
        <li data-testid="dark-mode-action">
          <FaPizzaSlice />
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
