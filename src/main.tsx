import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDom from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import './styles/main.css'
import App from './App.tsx'

// hayst

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
