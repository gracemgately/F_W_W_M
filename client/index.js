import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'

import Navbar from './components/Navbar'

// establishes socket connection
import socket from './socket'

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
  </Provider>,
  document.getElementById('app')
)
