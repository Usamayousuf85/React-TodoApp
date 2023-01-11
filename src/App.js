import React, { Component } from 'react'
import Footer from './Component/Footer';
import './App.css';
import image from './logo.png'

class Header extends Component {
  render() {
    return (
      <div><h1>Todo App <img src={image} alt="a" width={110} /></h1></div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: [{ title: [], edit: false }],
      showname: false,
      value: ''
    }
  }
  get_item = () => {
    this.setState({
      showname: true
    })
  }
  add_item = () => {
    let obj = { title: this.state.value }
    this.state.name.push(obj)
    this.setState({
      name: this.state.name,
      value: ''
    })
  }
  edit_item = (index) => {
    this.state.name[index].edit = true
    this.setState({
      name: this.state.name
    })
    // let edit = prompt('Enter Your Value', this.state.name[index])
    // this.state.name[index] = edit
  }
  value_change = (e, index) => {
    this.state.name[index].title = e.target.value
    this.setState({
      name: this.state.name
    })
  }
  update_value = (index) => {
    this.state.name[index].edit = false
    this.setState({
      name: this.state.name
    })
  }
  delete_item = (index) => {
    this.state.name.splice(index, 1)
    this.setState({
      name: this.state.name
    })
  }
  delete_all = () => {
    this.setState({
      name: []
    })
  }

  render() {
    let { name, showname, value } = this.state
    return (
      <>
        <center>
          <Header />
          <input value={value} onChange={(e) => this.setState({ value: e.target.value })} type="text" placeholder='Enter Your Value'/>
          <button onClick={() => this.get_item()}>Get item</button>
          <button onClick={() => this.add_item()}>Add item</button>
          <button onClick={() => this.delete_all()}>Delete All</button>
          {showname ? <ul>{name.map((v, i) => {
            return <li key={i}>
              {v.edit ? <input id='list' value={v.title} onChange={(e) => this.value_change(e, i)} type="text" /> : <span>{v.title}</span>}
              {v.edit ? <button onClick={() => this.update_value(i)}>Update</button> :
                <button onClick={() => this.edit_item(i)}>Edit</button>}
              <button onClick={() => this.delete_item(i)}>Delete</button></li>
          })}</ul> : null}
          <Footer />
        </center>
      </>
    )
  }
}

export default App

