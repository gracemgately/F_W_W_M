import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Grid from './Grid'

// establishes socket connection
import socket from './socket'

ReactDOM.render(
  <Provider store={store}>
    <Grid />
  </Provider>,
  document.getElementById('app')
)
