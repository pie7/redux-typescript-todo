import React from 'react';
import TodoContainer from "./components/TodoContainer/TodoContainer";
import { BrowserRouter as Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Route>
        <TodoContainer  />
      </Route>
    </div>
  );
}
export default App