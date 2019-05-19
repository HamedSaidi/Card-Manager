import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './style/main.css'
import createStore from './store'
import App from './app'

const store = createStore()

render(<Provider store={store}>
    <App products={store.getState()}/>
  </Provider>,
  document.getElementById('demo')
)
