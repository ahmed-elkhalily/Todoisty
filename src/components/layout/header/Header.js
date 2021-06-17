import { FaPizzaSlice, FaPlus } from 'react-icons/fa';

export const Header = () => (
  <header>
    <nav>
      <div className="logo">
        <img src="./images/logo.png" alt="logo" title="logo" />
      </div>
      <ul className="menu">
        <li>
          <FaPlus />
        </li>
        <li>
          <FaPizzaSlice />
        </li>
      </ul>
    </nav>
  </header>
);
