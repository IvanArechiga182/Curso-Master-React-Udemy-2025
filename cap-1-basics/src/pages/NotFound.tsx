import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>PAGE NOT FOUND</h1>
      <Link to="/">Regresa a la pagina principal</Link>
    </div>
  );
}

export default NotFound;
