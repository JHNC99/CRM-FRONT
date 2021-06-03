import React, { Fragment, useEffect, useState } from "react";
import clienteAxios from "../config/Config";
import Cliente from "./Cliente";
import { Link } from "react-router-dom";
function Clientes() {

  const [clientes, guardarClientes] = useState([]);
  //Consulta la REST API
  const consultarApi = async () => {
    const clientesConsulta = await clienteAxios.get("/clientes");
    guardarClientes(clientesConsulta.data);
  };

  useEffect(() => {
    consultarApi();
  }, []);
  return (
    <Fragment>
      <h2>Clientes</h2>
      <Link to={"/clientes/nuevo"} className="btn btn-verde nvo-cliente">
        <i className="fas fa-plus-circle"></i>
        Nuevo Cliente
      </Link>
      <ul className="listado-clientes">
        {clientes.map((cliente)=> ( <Cliente key={cliente._id} cliente={cliente} />) )}
      </ul>
    </Fragment>
  );
}

export default Clientes;
