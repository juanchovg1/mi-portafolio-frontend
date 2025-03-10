import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App.jsx';

createRoot(document.getElementById('main_content')).render(
  <StrictMode>
    <div className="video-background">
      <video autoPlay muted loop>
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </div>
    <App />
  </StrictMode>,
);
