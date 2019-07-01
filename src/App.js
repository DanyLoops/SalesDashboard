import React, { Component } from 'react'
import Header from './Header';
import Menu from './Menu';
import Content from './Content';
import Dashboard from './Dashboard';



export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Dashboard/>
        <Content/>

       

      
        
        
      </div>
    )
  }
}
