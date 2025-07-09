import { useEffect, useState } from "react";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

function AjaxComponent() {
  const API_URL = "https://reqres.in/api/users?page=2";
  const [users, setUsers] = useState<User[]>([]);
  const [staticUsers, setStaticUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getStaticUsers = () => {
    setStaticUsers([
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
    ]);
  };

  useEffect(() => {
    getStaticUsers();
  }, []);

  const handleGetUsuarios = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Error al obtener los usuarios");
      }
      const data = await response.json();
      setUsers(data.data);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error desconocido");
      }
    }
  };

  //   const handleGetUsuariosWithThen = () => {
  //     fetch(API_URL)
  //       .then((response) => response.json())
  //       .then(
  //         (data) => {
  //           setUsers(data.data);
  //         },
  //         (error) => {
  //           setError(error.message);
  //         }
  //       );
  //   };

  //   useEffect(() => {
  //     handleGetUsuarios();
  //   }, []);

  return (
    <div>
      <h1>Peticiones con AJAX</h1>
      <h2>Listado de usuarios estatico:</h2>
      <ul>
        {staticUsers.map((user) => (
          <li key={user.id}>
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
            />
            <p>
              {user.first_name} {user.last_name} - {user.email}
            </p>
          </li>
        ))}
      </ul>
      <h2>Listado de usuarios con AJAX y Fetch: </h2>
      <button onClick={handleGetUsuarios}>Obtener data</button>
      {error === null ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
              />
              <p>
                {user.first_name} {user.last_name} - {user.email}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
}

export default AjaxComponent;
