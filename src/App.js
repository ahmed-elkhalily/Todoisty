import React from 'react';
import Body from './components/layout/body/Body';
import Header from './components/layout/header/Header';
import { ProjectsProvider, SelectedProjectProvider } from './context';

function App() {
  return (
    <ProjectsProvider>
      <SelectedProjectProvider>
        <div className="App">
          <Header />
          <Body />
        </div>
      </SelectedProjectProvider>
    </ProjectsProvider>
  );
}

export default App;
