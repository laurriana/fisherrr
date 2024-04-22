import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import DateTime from './components/date';
import TodoApp from './components/todoapp';

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
console.clear()
root.render(
  <React.StrictMode>
        <DateTime/>
        <TodoApp />
  </React.StrictMode>
);