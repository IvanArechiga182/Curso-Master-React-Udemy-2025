import { useState, useEffect } from "react";

type Props = {
  actualYear: number | undefined;
};

function Ejercicio1Solucion({ actualYear }: Props) {
  const [year, setYear] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (actualYear !== undefined) {
      setYear(actualYear);
    }
  }, [actualYear]);

  const nextYear = () => {
    if (year !== undefined) setYear(year + 1);
  };

  const lastYear = () => {
    if (year !== undefined) setYear(year - 1);
  };

  const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setTimeout(() => {
        setYear(value);
      }, 1000);
    }
  };

  return (
    <div>
      <h1>El año actual es: {year}</h1>
      <input
        onChange={handleChangeYear}
        type="text"
        placeholder="Cambia el año"
        maxLength={4}
      />
      <button onClick={nextYear}>Año siguiente</button>
      <button onClick={lastYear}>Año anterior</button>
    </div>
  );
}

export default Ejercicio1Solucion;
