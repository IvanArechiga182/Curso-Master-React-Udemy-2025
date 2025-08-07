import { useNavigate, useParams } from "react-router-dom";

export const Clients = () => {
  const { clientName } = useParams();
  const navigate = useNavigate();

  const HandleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("username") as string;
    console.log(name.length);
    const url = `/clients/${name}`;

    if (name.length <= 0) {
      navigate("/home");
      return;
    }
    navigate(url);
  };

  return (
    <div>
      <h1>Clientes</h1>
      <h2>Bienvenido, {clientName} </h2>

      <form onSubmit={HandleFormSubmit}>
        <input type="text" placeholder="Nombre" name="username" />
        <input type="text" placeholder="Apellido" name="lastname" />
        <input type="submit" value="Enviar" name="send" />
      </form>
    </div>
  );
};
