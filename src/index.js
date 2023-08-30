import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './templates/App';
import { Home } from './custom-hooks';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
