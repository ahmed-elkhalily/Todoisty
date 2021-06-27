import React from 'react';
import { useTasksContextValues } from '../../context/index';
import CheckBox from '../checkbox/Checkbox';
import './tasks.scss';

const Tasks = () => {
  const { tasks } = useTasksContextValues();
  return (
    <ul className="tasks-menu">
      {tasks.map((task) => (
        <li className="tasks-menu__item" key={task.id}>
          <CheckBox id={task.id} />
          <span className="tasks-menu__name">{task.name}</span>
        </li>
      ))}
    </ul>
  );
};
export default Tasks;
