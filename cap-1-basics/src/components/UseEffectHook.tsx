import { useState, useEffect } from "react";
import "../styles/UseEffectComponent.css";
import ConditionalComponent from "./ConditionalComponent";
function UseEffectHook() {
  const [user, setUser] = useState<string>("Invitado");
  const [input, setInput] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const data = e.target.value;
    setInput(data);
  };

  useEffect(() => {
    console.log("Se ha cargado el componente correctamente!");
  }, []);

  //   useEffect(() => {
  //     alert("Se ha cambiado el nombre de usuario");
  //   }, [user]);

  const handleClick = () => {
    setUser(input);
    setInput("");
  };

  const handleCount = (increment: boolean) => {
    if (increment) {
      return setCount(count + 1);
    } else {
      return setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Uso del Use Effect Hook</h2>

      <div className="ejercicio1">
        <h2>Ejercicio 1 - Cambiar usuario</h2>
        <strong>{user}</strong>
        <br />
        <input
          type="text"
          placeholder="Cambia el usuario"
          value={input}
          onChange={handleChangeUser}
        />
        <button onClick={handleClick}>Cambiar usuario</button>
      </div>
      <div className="ejercicio2">
        <h2>Ejercicio 2 - Contador</h2>
        <p>
          El contador es:{" "}
          <strong
            className={`count ${count <= 5 && count >= 0 ? "low" : "high"}`}
          >
            {count}
          </strong>
        </p>

        <button onClick={() => handleCount(true)}>Aumenta cuenta</button>
        <button onClick={() => handleCount(false)}>Reduce cuenta</button>
        {count > 20 && <ConditionalComponent />}
      </div>
    </div>
  );
}

export default UseEffectHook;
