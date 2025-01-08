import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// createRoot(document.querySelector('body')).render(
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)



