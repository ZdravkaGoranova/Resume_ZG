import App from './App.jsx';
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { ThemeProviderComponent } from './ThemeContext.jsx';
import { HashRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter basename="/"> */}
    <HashRouter>
      <ThemeProviderComponent>
        <App />
      </ThemeProviderComponent>
    </HashRouter>
    {/* </BrowserRouter> */}
  </StrictMode>,
);