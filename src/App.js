import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//Importar layout
import Header from "./component/layout/Header";
import Navegacion from "./component/layout/Navegacion";
/* Componentes */
import Clientes from './component/clientes/Clientes';
import NuevoCliente from './component/clientes/NuevoCliente';
import EditarCliente from './component/clientes/EditarCliente';
import Productos from './component/productos/Productos';
import Pedidos from './component/pedidos/pedidos';
function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <div className="grid contenedor contenido-principal">
          <Navegacion />
          <main className="caja-contenido col-9">
            <Switch>
                <Route exact path="/productos" component={Productos} />
                <Route exact path="/pedidos" component={Pedidos} />
                <Route exact path='/' component={Clientes}/>    
                <Route exact path='/clientes/nuevo' component={NuevoCliente}/>
                <Route exact path='/clientes/editar/:id' component={EditarCliente}/>      
            </Switch>
          </main>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
