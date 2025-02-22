import App from './App.jsx';
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProviderComponent } from './ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <ThemeProviderComponent>
        <App />
      </ThemeProviderComponent>
    </BrowserRouter>
  </StrictMode>,
);