import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { applyPageBackground } from './backgrounds.js'
import './style.css'
import './cursor.css'

const artwork = applyPageBackground()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App artwork={artwork} />
  </StrictMode>,
)
