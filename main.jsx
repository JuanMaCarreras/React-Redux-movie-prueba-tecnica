import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import React from 'react'
import App from './App.jsx'

const root = createRoot(document.getElementById('app'))

root.render(
  <Provider store={store}>

    <App />

  </Provider>
)
