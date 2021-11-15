import React from "react";
import { Link } from "react-router-dom";
/* Importanto alert */
import swal from "sweetalert";

import clienteAxios from "../config/Config";

function Cliente({ cliente }) {
  const { _id, nombre, apellido, empresa, email, telefono } = cliente;
  console.log(cliente);
  /* Eliminar clientes*/
  const eliminarCliente = (id) => {
    clienteAxios.delete("/clientes/" + id).then((res) => {
      try {
        swal({
          title: "Eliminado!",
          text: res.data.mensaje,
          icon: "success",
        }).then(() => {
          window.location.reload();
        });
      } catch (err) {
        console.log(err);
      }
    });
  };
  return (
    <li className="cliente">
      <div className="info-cliente">
        <p className="nombre">
          {nombre} {apellido}
        </p>
        <p className="empresa">{empresa}</p>
        <p>{email}</p>
        <p>{telefono}</p>
      </div>
      <div className="acciones">
        <Link to={`/clientes/editar/${_id}`} className="btn btn-azul">
          <i className="fas fa-pen-alt" />
          Editar Cliente
        </Link>
        {/* <a href="#" className="btn btn-azul">
          <i className="fas fa-pen-alt"></i>
          Editar Cliente
        </a> */}
        <button
          type="button"
          className="btn btn-rojo btn-eliminar"
          onClick={() => eliminarCliente(_id)}
        >
          <i className="fas fa-times"></i>
          Eliminar Cliente
        </button>
      </div>
    </li>
  );
}

export default Cliente;
