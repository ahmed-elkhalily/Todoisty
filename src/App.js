import React from 'react';
import TodoBody from './components/layout/todobody/TodoBody';
import Header from './components/layout/header/Header';
import { ProjectsProvider, SelectedProjectProvider } from './context';

function App() {
  return (
    <ProjectsProvider>
      <SelectedProjectProvider>
        <div className="App">
          <Header />
          <TodoBody />
        </div>
      </SelectedProjectProvider>
    </ProjectsProvider>
  );
}

export default App;
