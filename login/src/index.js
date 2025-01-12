import React from 'react';
import ReactDOM from 'react-dom/client';
import { Loginform } from './loginform/Loginform';
import './loginform/login.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Loginform/>
  </React.StrictMode>
);
