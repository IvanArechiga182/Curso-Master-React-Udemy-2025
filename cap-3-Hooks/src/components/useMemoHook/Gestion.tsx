import { useEffect, useState } from "react";
import { Employees } from "./Employees";

const Gestion = () => {
  const [name, setName] = useState<string>();
  const [page, setPage] = useState<number>(1);
  const handleChangeName = (e: HTMLInputElement) => {
    console.log(e.value);
    setName(e.value);
  };

  useEffect(() => {
    console.log("Renderizando componente de gestion");
  }, [name, page]);

  return (
    <div>
      <h1>Nombre del Gestor: Eugenio</h1>
      <input
        type="text"
        name="gestorName"
        id="gestorName"
        placeholder="Introduce tu nombre de gestor"
        onChange={(e) => handleChangeName(e.target)}
      />
      <h2>Listado de empleados: </h2>
      <p>Los usuarios son gestionados por {name} de un jsonplaceholder...</p>
      <Employees page={page} />
      <button
        onClick={() => {
          setPage(1);
        }}
      >
        Pagina 1
      </button>
      <button
        onClick={() => {
          setPage(2);
        }}
      >
        Pagina 2
      </button>
    </div>
  );
};

export default Gestion;
