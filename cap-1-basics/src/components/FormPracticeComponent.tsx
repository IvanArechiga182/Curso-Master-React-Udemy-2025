import "../styles/FormPracticeComponent.css";
import { useState, useEffect } from "react";

type FormData = {
  name: string;
  lastname: string;
  gender: string;
  bio: string;
};

function FormPracticeComponent() {
  const [form, setForm] = useState<FormData>({
    name: "",
    lastname: "",
    gender: "Hombre",
    bio: "",
  });
  const [userData, setUserData] = useState<FormData>({
    name: "",
    lastname: "",
    gender: "Hombre",
    bio: "",
  });
  const [formSubmitted, setformSubmitted] = useState<boolean>(true);

  const handleFormData = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setformSubmitted(false);
    setUserData({
      name: form.name,
      lastname: form.lastname,
      gender: form.gender,
      bio: form.bio,
    });

    setForm({
      name: "",
      lastname: "",
      gender: "Hombre",
      bio: "",
    });
  };

  useEffect(() => {
    console.log("Formulario enviado:", userData);
  }, [userData]);

  return (
    <div>
      <h1>Formularios</h1>
      {!formSubmitted && (
        <div className="success-message">
          <p>
            Bienvenido,{" "}
            <strong>
              {userData.name} {userData.lastname}
            </strong>
            , tu genero es: <strong>{userData.gender}</strong> y tu{" "}
            <strong>biografia</strong>
            dice lo siguiente:
          </p>
          <p>{userData.bio}</p>
        </div>
      )}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={form.name}
            onChange={handleFormData}
            name="name"
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            value={form.lastname}
            onChange={handleFormData}
            name="lastname"
            required
          />
          <select
            name="gender"
            id="client-gender"
            value={form.gender}
            onChange={handleFormData}
            required
          >
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
          </select>
          <textarea
            name="bio"
            id="bio"
            placeholder="Biografia"
            value={form.bio}
            onChange={handleFormData}
            required
          ></textarea>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default FormPracticeComponent;
