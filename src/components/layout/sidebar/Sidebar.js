import {
  FaInbox,
  FaChevronDown,
  FaRegCalendarAlt,
  FaCalendarDay,
} from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <li className="item">
          <FaInbox />
          <span>Inbox</span>
        </li>
        <li className="item">
          <FaCalendarDay />
          <span>Today</span>
        </li>
        <li className="item">
          <FaRegCalendarAlt />
          <span>Next 7 days</span>
        </li>
        <li className="item">
          <FaChevronDown />
          <span>projects</span>
        </li>
      </ul>
    </div>
  );
};
