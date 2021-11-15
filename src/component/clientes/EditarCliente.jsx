import React, { Fragment, useState, useEffect } from "react";
//import swal from "sweetalert";
import clienteAxios from "../config/Config";
const EditarCliente = (props) => {
  /* Id del ciente */
  const { id } = props.match.params;
  //State donde se almacena el cliente
  const [cliente, datosCliente] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    email: "",
    telefono: "",
  });

  // Query a la API
  const consultarAPI = async () => {
    const clienteConsulta = await clienteAxios.get(`/clientes/${id}`);

    // colocar en el state
    console.log(clienteConsulta.data);
    datosCliente(clienteConsulta.data);
  };

  // useEffect, cuando el componente carga
  useEffect(() => {
    consultarAPI();
  }, []);

  /* Funcion que almacena el cliente */
  const actualizarCliente = (e) => {
    //Almacena cliente en el state
    datosCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  /* Vaidacion del formulario */
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
  //Añade el cliente actualizado en la base de datos
  const agregarCliente = (e) => {
    e.preventDefault();

    clienteAxios.put(`/clientes/${cliente._id}`, cliente).then((res) => {
      // validar si hay errores de mongo
      console.log(res);
      // redireccionar
      props.history.push("/");
    });
  };
  console.log(cliente);
  return (
    <Fragment>
      <h2>Editar Cliente</h2>
      <form onSubmit={agregarCliente}>
        <legend>Llena todos los campos</legend>

        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre Cliente"
            name="nombre"
            value={cliente.nombre}
            onChange={actualizarCliente}
          />
        </div>

        <div className="campo">
          <label>Apellido:</label>
          <input
            type="text"
            placeholder="Apellido Cliente"
            name="apellido"
            value={cliente.apellido}
            onChange={actualizarCliente}
          />
        </div>

        <div className="campo">
          <label>Empresa:</label>
          <input
            type="text"
            placeholder="Empresa Cliente"
            name="empresa"
            value={cliente.empresa}
            onChange={actualizarCliente}
          />
        </div>

        <div className="campo">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email Cliente"
            name="email"
            value={cliente.email}
            onChange={actualizarCliente}
          />
        </div>

        <div className="campo">
          <label>Teléfono:</label>
          <input
            type="tel"
            placeholder="Teléfono Cliente"
            name="telefono"
            value={cliente.telefono}
            onChange={actualizarCliente}
          />
        </div>

        <div className="enviar">
          <input
            type="submit"
            className="btn btn-azul"
            value="Agregar Cliente"
            disabled={validarCliente()}
          />
        </div>
      </form>
    </Fragment>
  );
};

export default EditarCliente;
