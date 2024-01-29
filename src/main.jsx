import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import { RouterProvider } from 'react-router'
import router from './routes/index.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'

console.log(import.meta.env.DEV)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
