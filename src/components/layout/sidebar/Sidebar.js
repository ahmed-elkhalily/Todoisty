import React from 'react';
// context
// font icons components
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiCalendarEventLine } from 'react-icons/ri';
import { BsInbox } from 'react-icons/bs';
import { BiChevronDown } from 'react-icons/bi';
// components
import MainProject from '../../mainProject/MainProject';
import { useTasksContextValues, useSelectedProjectValue } from '../../../context/index';
import Projects from '../../projects/Projects';
import './sidebar.scss';

const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const { setSelectTasks } = useTasksContextValues();
  const selectProjectTasks = (value) => {
    setSelectedProject(value);
    setSelectTasks(value);
  };
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <MainProject onClickFunction={() => selectProjectTasks('INBOX')}>
          <BsInbox />
          <span>Inbox</span>
        </MainProject>
        <MainProject onClickFunction={() => selectProjectTasks('TODAY')}>
          <RiCalendarEventLine />
          <span>Today</span>
        </MainProject>
        <MainProject onClickFunction={() => selectProjectTasks('NEXT_7')}>
          <FaRegCalendarAlt />
          <span>Next 7 days</span>
        </MainProject>
        <MainProject onClickFunction={() => selectProjectTasks('NEXT_7')}>
          <FaRegCalendarAlt />
          <span>Next 7 days</span>
        </MainProject>
        <li className="sidebar__item">
          <BiChevronDown />
          <span>projects</span>
        </li>
      </ul>
      <Projects />
    </div>
  );
};
export default Sidebar;
