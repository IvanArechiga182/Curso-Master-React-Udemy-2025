import React, { useState } from "react";
import { GetUserData } from "./customHooks/GetUserData";

function MyUser() {
  const [url, setUrl] = useState<string>("https://reqres.in/api/users/1");
  const { data, loading } = GetUserData(url);

  const getUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pageId = e.target.value;
    if (!pageId) return;
    const url = `https://reqres.in/api/users/${pageId}`;
    setUrl(url);
  };

  return (
    <div>
      {/* <h1>Nombre usuario: {data.first_name} </h1> */}
      <p>Datos del usuario: </p>
      {loading && <strong>Cargando datos...</strong>}
      {!loading && data != null && (
        <ul>
          <li>
            Nombre completo: {data.first_name} {data.last_name}
          </li>
          <li>Email: {data.email}</li>
          <li>
            Avatar: <br />{" "}
            <img src={data.avatar} alt="user-avatar" width="190px" />
          </li>
        </ul>
      )}
      <br />
      <input
        type="number"
        name="pageId"
        id="page-number"
        onChange={getUser}
        placeholder="Busca el ID"
      />
    </div>
  );
}

export default MyUser;
