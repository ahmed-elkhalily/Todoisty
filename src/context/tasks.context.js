import React, { useContext, createContext, useState } from 'react';
import { useTask } from '../hooks';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [selectTasks, setSelectTasks] = useState(null);
  const { tasks, setTasks } = useTask(selectTasks);
  return (
    <TasksContext.Provider value={{ tasks, setTasks, selectTasks, setSelectTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContextValues = () => useContext(TasksContext);
