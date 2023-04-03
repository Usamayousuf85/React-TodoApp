import React, { Component } from 'react'
import image from '../logo.png'
import './Todos/Todos.css'

export class Header extends Component {
    render() {
        return (
            <div><h1>Todo App <img src={image} alt="a" width={110} /></h1></div>
        )
    }
}

export default Header