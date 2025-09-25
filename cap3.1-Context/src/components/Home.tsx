import { useContext } from "react";
import { TestContext } from "../context/TestContext";

export const Home = () => {
  const sharedContext = useContext(TestContext);

  if (!sharedContext) return null;
  const { user } = sharedContext;

  return (
    <div>
      <h1>Inicio</h1>
      <p>
        Bienvenido, <strong>{user.username}</strong> a la pagina de inicio
      </p>
    </div>
  );
};
