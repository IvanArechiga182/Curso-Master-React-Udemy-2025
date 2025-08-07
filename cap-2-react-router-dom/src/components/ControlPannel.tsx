import { NavLink, Outlet } from "react-router-dom";

const ControlPannel = () => {
  return (
    <div>
      <h1>Panel de Control</h1>
      <p>Elige una de estas opciones</p>
      <nav>
        <ul>
          <li>
            <NavLink to="/panel/inicio">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/panel/gestion-usuarios">Gestion de usuarios</NavLink>
          </li>
          <li>
            <NavLink to="/panel/crear-articulos">Crear articulos</NavLink>
          </li>
          <li>
            <NavLink to="/panel/acerca-de">Acerca de</NavLink>
          </li>
        </ul>
      </nav>

      <div>
        {/*Aqui se renderiza el componente de la ruta especifica del nav*/}
        <Outlet />
      </div>
    </div>
  );
};

export default ControlPannel;
