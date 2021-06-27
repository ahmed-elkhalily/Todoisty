import React from 'react';
import TodoBody from './components/layout/todobody/TodoBody';
import Header from './components/layout/header/Header';
import { ProjectsProvider, SelectedProjectProvider, TasksProvider } from './context';

function App() {
  return (
    <ProjectsProvider>
      <SelectedProjectProvider>
        <TasksProvider>
          <div className="App">
            <Header />
            <TodoBody />
          </div>
        </TasksProvider>
      </SelectedProjectProvider>
    </ProjectsProvider>
  );
}

export default App;
