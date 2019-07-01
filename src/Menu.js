import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
          <aside className="main-sidebar">
  {/* sidebar: style can be found in sidebar.less */}
  <section className="sidebar">
    {/* Sidebar user panel */}
    <div className="user-panel">
      <div className="pull-left image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
      </div>
      <div className="pull-left info">
        <p>Alexander Pierce</p>
      
      </div>
    </div>
  
    {/* sidebar menu: : style can be found in sidebar.less */}
    <ul className="sidebar-menu" data-widget="tree">
      <li className="header">MAIN NAVIGATION</li>
      <li className="active treeview menu-open">
        <a href="#">
          <i className="fa fa-dashboard" /> <span>Dashboard</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right" />
          </span>
        </a>
        <ul className="treeview-menu">
          <li><a href="">Datos</a></li>
          <li className="active"><a href="">Estadísticas</a></li>
        </ul>
      </li>
    </ul>
  </section>
  {/* /.sidebar */}
</aside>
    
            </div>
        )
    }
}
