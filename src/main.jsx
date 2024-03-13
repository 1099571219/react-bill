import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './tailwind.css'
import { Provider } from 'react-redux'
import store from './store/index.js'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
