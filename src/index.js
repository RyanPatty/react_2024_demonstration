import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Dashboard from './components/dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard /> 
  </React.StrictMode>
);
