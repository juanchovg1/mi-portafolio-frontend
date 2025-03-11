import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App.jsx';
import Header from './components/Header'; // Import Header

createRoot(document.getElementById('main_content')).render(
  <StrictMode>
    <Header /> {/* Render Header here */}
    <App />
  </StrictMode>,
);
