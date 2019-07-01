import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <div>

  {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <h1>
      Dashboard
      <small>Estadísticas</small>
    </h1>
  </section>
  {/* Main content */}
  <section className="content">
  





{/* Small boxes (Stat box) */}
<div className="row">
  <div className="col-lg-3 col-xs-6">
    {/* small box */}
    <div className="small-box bg-aqua">
      <div className="inner">
        <h3>150</h3>
        <p>New Orders</p>
      </div>
      <div className="icon">
        <i className="fa fa-shopping-cart" />
      </div>
      <a href="#" className="small-box-footer">
        More info <i className="fa fa-arrow-circle-right" />
      </a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-xs-6">
    {/* small box */}
    <div className="small-box bg-green">
      <div className="inner">
        <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
        <p>Bounce Rate</p>
      </div>
      <div className="icon">
        <i className="ion ion-stats-bars" />
      </div>
      <a href="#" className="small-box-footer">
        More info <i className="fa fa-arrow-circle-right" />
      </a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-xs-6">
    {/* small box */}
    <div className="small-box bg-yellow">
      <div className="inner">
        <h3>44</h3>
        <p>User Registrations</p>
      </div>
      <div className="icon">
        <i className="ion ion-person-add" />
      </div>
      <a href="#" className="small-box-footer">
        More info <i className="fa fa-arrow-circle-right" />
      </a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-xs-6">
    {/* small box */}
    <div className="small-box bg-red">
      <div className="inner">
        <h3>65</h3>
        <p>Unique Visitors</p>
      </div>
      <div className="icon">
        <i className="ion ion-pie-graph" />
      </div>
      <a href="#" className="small-box-footer">
        More info <i className="fa fa-arrow-circle-right" />
      </a>
    </div>
  </div>
  {/* ./col */}
</div>
{/* /.row */}

</section>
</div>






                
            </div>
        )
    }
}
