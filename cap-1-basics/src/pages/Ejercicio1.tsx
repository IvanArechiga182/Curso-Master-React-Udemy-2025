{
  /*
    1. Crear un componente
    2. Recibir una prop con el año actual
    3. Usar funciones para sacar el año
    4. Usar estados y eventos para tener dos botones.
       - Pasar al próximo año
       - Ir al año anterior
       - Mostrar en todo momento el año por pantalla
       
    5. Validar que el año sea un número y que sea requerido (prop)
    6. Cambiar el año mediante un input de texto y que se cambie dinámicamente
  
  */
}
import Ejercicio1Solucion from "../components/Ejercicio1Solucion";
function Ejercicio1() {
  const date: Date = new Date();
  const yearDate = date.getFullYear();

  return (
    <div>
      <Ejercicio1Solucion actualYear={yearDate} />
    </div>
  );
}

export default Ejercicio1;
