import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoList from './components/ToDoList';

const GlobalStyle = createGlobalStyle`
`;


function App() {
  return (
   <>
   <GlobalStyle/>
   <TodoList/>
   </>
  );
}

export default App;
