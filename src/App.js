import React, { Component } from 'react'
import './App.css'

import Saso from './components/Success'

class App extends Component {
  render() {
    return (
      <div>
        <Saso text='Test1' color='green' />
        <Saso text='Test2' color='red' />
        <Saso text='Test3' color='yellow' />
      </div>
    )
  }
}

export default App
