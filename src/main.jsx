import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { languageContext } from "./context/languageContext";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(


  <languageContextProvider>
    <App />
  </languageContextProvider>
  // </LanguageContext.Provider>
  // </StrictMode>,
)
