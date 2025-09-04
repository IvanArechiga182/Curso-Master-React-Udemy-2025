import { useRef, useState } from "react";
import type { BasicUserData } from "../../types/basicForm";
import "../../Form.css";
const Form = () => {
  const nombre = useRef<HTMLInputElement>(null);
  const apellidos = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<BasicUserData>({
    name: "",
    lastNames: "",
    email: "",
  });

  const showConsoleLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre.current && apellidos.current && email.current)
      setData({
        name: nombre.current.value,
        lastNames: apellidos.current.value,
        email: email.current.value,
      });
    if (box.current) {
      const { current: boxElement } = box;
      boxElement.classList.add("success");
      boxElement.innerHTML = "Lolaso";
    }
    // console.log(nombre.current?.value);
    // console.log(apellidos.current?.value);
    // console.log(email.current?.value);
  };
  return (
    <div>
      <div className="miCaja" ref={box}>
        <h1>Basic Form</h1>
      </div>

      <form onSubmit={showConsoleLog}>
        <input type="text" name="" id="" ref={nombre} placeholder="Nombre" />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={apellidos}
          placeholder="Apellidos"
        />
        <br />
        <input type="email" name="" id="" ref={email} placeholder="Email" />
        <br />
        <input type="submit" value="Enviar" />
      </form>
      <button onClick={() => nombre.current?.focus()}>
        Empezar a llenar formulario
      </button>
      <h1>{data.name}</h1>
      <h2>{data.lastNames}</h2>
      <h3>{data.email}</h3>
    </div>
  );
};

export default Form;
