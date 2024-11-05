import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { TagProvider } from './Context/TagContext.jsx'; 
import { LoaderProvider } from './Context/LoaderContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoaderProvider>
      <TagProvider>
        <App />
      </TagProvider>
    </LoaderProvider>
  </StrictMode>,
);
