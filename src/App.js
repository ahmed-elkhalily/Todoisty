import React from 'react';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import { ProjectsProvider, SelectedProjectProvider } from './context';

function App() {
  return (
    <ProjectsProvider>
      <SelectedProjectProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </SelectedProjectProvider>
    </ProjectsProvider>
  );
}

export default App;
