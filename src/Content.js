import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (  
       <div>

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
    {/* SELECT2 EXAMPLE */}
    <div className="box box-info">
      <div className="box-header with-border">
        <h3 className="box-title">Datos en Dashboard</h3>
      </div>
      
      {/* /.box-header */}
      <div className="box-body">
        <div className="row">
          <div className="col-md-6">
            
              <div className="form-group">
              <label><h4>Cantidad de nuevas compras</h4></label>
              <div className="input-group">
                <input type="number" className="form-control" placeholder="Nuevas compras"/>
              </div>
              <label><h4>Incremento de Compras</h4></label>
              <div className="input-group">
                <input type="number" className="form-control" placeholder="% incremento de Compras" />
              </div>
              <label><h4>Cantidad de nuevas compras</h4></label>
              <div className="input-group">
                <input type="number" className="form-control" placeholder="Nuevos Usuarios" />
              </div>
              <label><h4>Cantidad de nuevas compras</h4></label>
              <div className="input-group">
                <input type="number" className="form-control" placeholder="Nuevas visitas" />
              </div>

              {/* /.input group */}

              <div class="box-footer">
              <button type="submit" class="btn btn-info pull-right">Ingresar Datos</button>
              </div>

            </div>
            
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>
      {/* /.box-body */}
    </div>
    {/* /.box */}

  </section>
  {/* /.content */}
</div>







</div>


        )
    }
}
