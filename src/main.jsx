import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('main_content')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
