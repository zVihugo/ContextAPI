import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Importando o context provider

import {CounterContextProvider} from './context/CounterContext'

//Importando o TitleContextProvider

import {TitleColorContextProvider} from './context/TitleColorContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>,
)
