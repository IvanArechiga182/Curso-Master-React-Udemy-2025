import { useEffect, useState } from "react";
import React from "react";
import type { Employee } from "../../types/employee";

type Props = {
  page: number;
};

const EmployeesComponent = ({ page }: Props) => {
  const API_URL = `https://reqres.in/api/users?page=${page}`;

  const [employees, setEmployees] = useState<Array<Employee>>([
    {
      id: 0,
      email: "",
      first_name: "",
      last_name: "",
      avatar: "",
    },
  ]);

  const getEmployees = async () => {
    const response = await fetch(API_URL, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });
    if (response.ok) {
      const { data: employees } = await response.json();
      setEmployees(employees);
      console.log("Se ejecuto la peticion Ajax");
    }
  };

  useEffect(() => {
    getEmployees();
    console.log("Renderizando componente Employees");
  }, [page]);

  return (
    <div>
      <h1>Empleados</h1>
      <h2>Visualizando página {page}</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.first_name} {employee.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Aquí aplicamos React.memo
export const Employees = React.memo(EmployeesComponent);
