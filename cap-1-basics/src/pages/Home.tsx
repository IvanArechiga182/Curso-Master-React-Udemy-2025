import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Curso React</h1>
      <h2>Cap 1 - Basics</h2>
      <ol>
        <li>
          <Link to="/components">Components en React</Link>
        </li>
        <li>
          <Link to="/ejercicio1">Ejercicio 1.</Link>
        </li>
        <li>
          <Link to="/useEffectHook">UseEffect Hook</Link>
        </li>
        <li>
          <Link to="/ajaxTest">Peticiones Ajax</Link>
        </li>
        <li>
          <Link to="/formularios">Formularios</Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
