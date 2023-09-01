import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home2 } from './useAsync';
import { Home3 } from './useLayoutEffect';
import { Home4 } from './compound-components';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home4 />
  </React.StrictMode>
);
