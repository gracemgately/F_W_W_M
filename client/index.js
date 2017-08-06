import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'


import Navbar from './components/Navbar'

// establishes socket connection
import socket from './socket'

ReactDOM.render(
    <Navbar />,
  document.getElementById('app')
)
