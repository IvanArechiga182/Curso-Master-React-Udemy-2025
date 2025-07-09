import type { Client } from "../types/Client";
import { useState } from "react";
import "../styles/ComponentsTest.css";
type Props = {
  usuario: {
    nombre: string;
    apellido: string;
    web: string;
  };
};

function ComponentsTest({ usuario }: Props) {
  const books = ["Harry Potter", "Juego de Tronos", "Clean Code"];
  const [clients, setClients] = useState<Client[]>([]);
  const [form, setForm] = useState<Client>({
    name: "",
    lastname: "",
    birthdate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmitClients = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.name && form.lastname && form.birthdate) {
      setClients((prev) => [...prev, form]);
      setForm({ name: "", lastname: "", birthdate: "" });
    }
  };

  return (
    <div>
      <p>
        Hola, <strong>{usuario.nombre + " " + usuario.apellido}</strong>
      </p>
      <p>
        Actualmente te encuentras en: <strong> {usuario.web}</strong>
      </p>
      <p>Se estarán aprendiendo bastantes cosas.</p>
      <p>Te dejo una lista de libros muy buenos:</p>
      //Renderizado condicional
      {books.length > 0 ? (
        <ul>
          {books.map((libro, i) => {
            return <li key={i}>{libro}</li>;
          })}
        </ul>
      ) : (
        <h2>No hay información para mostrar</h2>
      )}
      <div className="form-container">
        <form onSubmit={handleSubmitClients}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="lastname">Apellido: </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={form.lastname}
            onChange={handleChange}
          />
          <label htmlFor="birthdate">Fecha nacimiento:</label>
          <input
            type="text"
            name="birthdate"
            id="birthdate"
            value={form.birthdate}
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="Enviar" />
        </form>
      </div>
      {clients.length > 0 ? (
        <ul>
          {clients.map((client, i) => (
            <li key={i}>
              {client.name} {client.lastname} - {client.birthdate}
            </li>
          ))}
        </ul>
      ) : (
        <h2>No hay clientes para mostrar</h2>
      )}
    </div>
  );
}

export default ComponentsTest;
