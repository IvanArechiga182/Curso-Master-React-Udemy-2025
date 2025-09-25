import { useContext } from "react";
import styles from "../styles/LogIn.module.css";
import { TestContext } from "../context/TestContext";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const sharedContext = useContext(TestContext);
  const navigate = useNavigate();

  const { user, setUser } = sharedContext!;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get("username")?.toString() || "";
    const name = formData.get("realname")?.toString() || "";
    const website = formData.get("website")?.toString() || "";

    setUser({
      username: username,
      name: name,
      website: website,
    });

    localStorage.setItem("credentials", JSON.stringify(user));

    form.reset();

    navigate("/");
  };

  return (
    <div>
      <h1>Inicia sesion</h1>
      <p>Bienvenido, autentificate</p>

      <form onSubmit={handleFormSubmit} className={styles.formLogin}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Ingresa tu nombre de usuario"
        />
        <input
          type="text"
          name="realname"
          id="realname"
          placeholder="Ingresa tu nombre real"
        />
        <input
          type="text"
          name="website"
          id="website"
          placeholder="Ingresa tu sitio web"
        />
        <input type="submit" value="Ingresar" />
      </form>
    </div>
  );
};
