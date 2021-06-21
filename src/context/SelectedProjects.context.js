import React, { useContext, useState, createContext } from 'react';
import { useProjects } from '../hooks';

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = ({ children }) => {
  const { projects, setProjects } = useProjects('inbox');
  return (
    <SelectedProjectContext.Provider
      value={{
        projects,
        setProjects,
      }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const UseSelectedProjectValue = () => useContext(SelectedProjectContext);
