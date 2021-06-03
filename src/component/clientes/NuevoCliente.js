import React, { Fragment, useState } from "react";
//Importar  portart cliente
import clienteAxios from "../config/Config";
function NuevoCliente() {
  const [cliente, guardarCliente] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    email: "",
    telefono: "",
  });

  //Leer datos des formulario
  const actualizarState = (e) => {
    //guardar en el state
    guardarCliente({
      //obtener copia del state
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  //Validar formulario
  const validarCliente = () => {
    //Destructuring cliente
    const { nombre, apellido, empresa, email, telefono } = cliente;
    let valido = true;
    if (
      !nombre.length ||
      !apellido.length ||
      !empresa.length ||
      !email.length ||
      !telefono.length
    ) {
      return valido;
    }
  };

  //Añade en la base de datos
  const agregarCliente = (e) => {
    e.preventDefault();
    //enviar peticion
    clienteAxios.post("/clientes", cliente).then((res) => {
      console.log(res);
    });
  };

  return (
    <Fragment>
      <h2>Nuevo cliente</h2>
      <form onSubmit={agregarCliente}>
        <legend>Llena todos los campos</legend>

        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre Cliente"
            name="nombre"
            onChange={actualizarState}
          />
        </div>

        <div className="campo">
          <label>Apellido:</label>
          <input
            type="text"
            placeholder="Apellido Cliente"
            name="apellido"
            onChange={actualizarState}
          />
        </div>

        <div className="campo">
          <label>Empresa:</label>
          <input
            type="text"
            placeholder="Empresa Cliente"
            name="empresa"
            onChange={actualizarState}
          />
        </div>

        <div className="campo">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email Cliente"
            name="email"
            onChange={actualizarState}
          />
        </div>

        <div className="campo">
          <label>Teléfono:</label>
          <input
            type="tel"
            placeholder="Teléfono Cliente"
            name="telefono"
            onChange={actualizarState}
          />
        </div>

        <div className="enviar">
          <input
            type="submit"
            class="btn btn-azul"
            value="Agregar Cliente"
            disabled={validarCliente()}
          />
        </div>
      </form>
    </Fragment>
  );
}

export default NuevoCliente;
