import ComponentsTest from "../components/ComponentsTest";
import Events from "../components/Events";
import State from "../components/State";
import { Link } from "react-router-dom";
function Components() {
  const usuario = {
    nombre: "Ivan",
    apellido: "Arechiga",
    web: "Componentes",
  };

  return (
    <div>
      <h1>Componentes en React</h1>
      <ComponentsTest usuario={usuario} />
      <Events />
      <State />
      <h2>Ir al ejercicio 1.</h2>
      <Link to="/ejercicio1">Click aqui</Link>
    </div>
  );
}

export default Components;
