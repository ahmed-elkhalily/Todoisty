import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiCalendarEventLine } from 'react-icons/ri';
import { BsInbox } from 'react-icons/bs';
import { BiChevronDown } from 'react-icons/bi';
import Projects from '../../projects/Projects';
import './sidebar.scss';

const Sidebar = () => (
  <div className="sidebar">
    <ul className="sidebar__menu">
      <li className="sidebar__item">
        <BsInbox />
        <span>Inbox</span>
      </li>
      <li className="sidebar__item">
        <RiCalendarEventLine />
        <span>Today</span>
      </li>
      <li className="sidebar__item">
        <FaRegCalendarAlt />
        <span>Next 7 days</span>
      </li>
      <li className="sidebar__item">
        <BiChevronDown />
        <span>projects</span>
      </li>
    </ul>
    <Projects />
  </div>
);
export default Sidebar;
