import { useEffect, useRef, useState } from "react";

const ExampleUseRef = () => {
  const [greeting, setGreeting] = useState<number>(0);
  const enqueuGreetings = useRef(greeting);
  const handleGreeting = () => {
    setGreeting(greeting + 1);
  };

  useEffect(() => {
    enqueuGreetings.current = greeting;
    setTimeout(() => {
      console.log("Mensajes en cola: ", enqueuGreetings.current);
    }, 2000);
  }, [greeting]);
  return (
    <div>
      <h1>Ejemplo 2 UseRef</h1>
      <button onClick={handleGreeting}>Enviar saludo</button>
      <h1>Saludos enviados: {greeting}</h1>
    </div>
  );
};

export default ExampleUseRef;
