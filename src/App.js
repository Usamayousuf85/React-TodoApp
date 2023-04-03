import React, { Component } from 'react'
import Header from './Component/Header';
import Todos from './Component/Todos/Todos';
import './App.css';

class App extends Component {
 
  render() {
    
    return (
      <>
        <center>
          <Header />
          <Todos/>
        </center>
      </>
    )
  }
}

export default App

