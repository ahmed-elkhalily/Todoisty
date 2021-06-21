import React from 'react';
import { useTask } from '../hooks/index';
import CheckBox from './Checkbox';

const Tasks = () => {
  const { tasks } = useTask('1');
  console.log(tasks);
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <CheckBox id={task.id} />
          <span>{task.name}</span>
        </li>
      ))}
    </ul>
  );
};
export default Tasks;
