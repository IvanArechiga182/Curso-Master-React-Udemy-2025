import { useState } from "react";
function State() {
  const [number, setNumber] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");

  const handleClick = () => {
    setNumber(number + 1);
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const handleSetName = () => {
    setName(inputName);
    setInputName("");
  };

  return (
    <div>
      <h1>Estado en React</h1>
      <h2>Clicks: {number}</h2>
      <button onClick={handleClick}>Aumenta la cuenta!</button>
      <br />
      <h2>Nombre: {name}</h2>
      <input
        type="text"
        name="newName"
        id="newName"
        placeholder="Nuevo nombre"
        value={inputName}
        onChange={changeName}
      />
      <button onClick={handleSetName}>Cambiar nombre</button>
    </div>
  );
}

export default State;
