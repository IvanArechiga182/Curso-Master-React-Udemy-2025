import { useRef, useState } from "react";
import { useCaps } from "../../hooks/useCaps";
import TestForm from "./TestForm";
const CustomHooksExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [upperChecked, setUpperChecked] = useState<boolean>(false);
  const [text, setText] = useState<string>(""); // estado del texto
  const [action, setAction] = useState<string>("lower"); // estado de acción para el hook

  const handleClick = () => {
    if (!inputRef.current) return;

    const currentText = inputRef.current.value;
    setText(currentText);
    setAction(upperChecked ? "upper" : "lower");
  };

  const { converted, pruebaFuncion } = useCaps(text, action);

  return (
    <div>
      <h1>CustomHooks Example</h1>
      <h3>Titulo: {pruebaFuncion()}</h3>
      <input
        type="text"
        ref={inputRef}
        placeholder="Ingresa el texto a convertir"
      />
      <div>
        <label>
          <input
            type="radio"
            name="options"
            onChange={(e) => setUpperChecked(e.target.checked)}
          />
          UpperCase
        </label>
        <label>
          <input
            type="radio"
            name="options"
            onChange={() => setUpperChecked(false)}
          />
          LowerCase
        </label>
      </div>
      <button onClick={handleClick}>Convertir</button>
      <div>
        <h2>El texto original fue: {text}</h2>
        <h2>El texto convertido fue: {converted}</h2>
      </div>
      <TestForm />
    </div>
  );
};

export default CustomHooksExample;
