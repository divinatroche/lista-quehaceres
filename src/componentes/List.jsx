import React, { useState } from "react";

const List = ({ lista, setList }) => {
  const [tarea, setTarea] = useState("fdfd");

  const borrarTarea = (itemSeleccionado) => {
    const tareaBorrado = lista.filter((item) => {
      return item.tarea !== itemSeleccionado;
    });
    setList(tareaBorrado);
  };

  return (
    <div className="border border-success col-8 p-5">
      {lista.map((item) => (
        <div className="border border-warning col-7 mx-auto ">
          <label>
            <input type="checkbox" onChange={(e) => setTarea(e.target.value)} />
            {item.tarea}
          </label>
          <button
            className="btn btn-danger"
            onClick={() => borrarTarea(item.tarea)}
          >
            {" "}
            Delete{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
