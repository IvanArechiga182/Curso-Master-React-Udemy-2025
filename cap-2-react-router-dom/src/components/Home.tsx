import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>Pagina de inicio</h1>
      <p>Esta es la pagina de inicio </p>
      <hr />
      <Link to="/contact">Contacto</Link>
      <Link to="/articles"></Link>
    </div>
  );
};
