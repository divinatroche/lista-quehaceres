import "./App.css";
import { useState } from "react";
import List from "./componentes/List";
import Form from "./componentes/Form";

function App() {
  const [list, setList] = useState([
    {
      tarea: "Barrer",
    },
    {
      tarea: "Cocinar",
    },
    {
      tarea: "hacer la tarea",
    },
  ]);

  return (
    <div className="App d-flex p-5">
      <List lista={list} setList={setList} />
      <Form lista={list} setList={setList} />
    </div>
  );
}

export default App;
