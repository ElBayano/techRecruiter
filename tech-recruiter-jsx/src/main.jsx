import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LightTheme from './components/global/LightTheme.js'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <LightTheme/>
      <App />
  </React.StrictMode>,
)
