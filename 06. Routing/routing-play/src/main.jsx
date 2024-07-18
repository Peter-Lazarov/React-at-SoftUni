import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'

//for CSS
//https://tailwindcss.com/docs/guides/vite
//for HTML
//https://tailwindui.com/components/marketing/sections/heroes

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
