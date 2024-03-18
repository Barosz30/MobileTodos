import React from 'react';
import { AutorizationProvider } from './src/context/AutorizationProvider';
import { TodosProvider } from './src/context/TodosProvider';
import Main from './src/Main';

const App: React.FC = () => {
  return (
    <AutorizationProvider>
      <TodosProvider>
        <Main />
      </TodosProvider>
  </AutorizationProvider>
  );
};

export default App;