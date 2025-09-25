import { useContext } from "react";
import { TestContext } from "../context/TestContext";
export const Articles = () => {
  const sharedContext = useContext(TestContext);

  if (!sharedContext) return null;

  const { user } = sharedContext;

  return (
    <div>
      <h1>Articles</h1>
      <p>Pagina de articulos disponibles</p>
      <h2>Contenido del curso: {user.website}</h2>
    </div>
  );
};
