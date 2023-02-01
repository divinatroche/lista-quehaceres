import React, { useState } from "react";

const Form = ({ lista, setList }) => {
  const [tarea, setTarea] = useState("");

  const adminFormulario = (evento) => {
    evento.preventDefault();
    console.log(evento.target);

    const nuevoItem = {
      tarea,
    };
    setList([...lista, nuevoItem]);
  };

  return (
    <div className="border border-danger p-2">
      <form className="form" onSubmit={adminFormulario}>
        <div className="mb-3">
          <label className="form-label">Agregar Tarea: </label>
          <input
            type="text"
            onChange={(evento) => setTarea(evento.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
