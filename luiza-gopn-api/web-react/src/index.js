import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppStack from './routes/AppStack';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <AppStack />
  </React.StrictMode>
);

reportWebVitals();
