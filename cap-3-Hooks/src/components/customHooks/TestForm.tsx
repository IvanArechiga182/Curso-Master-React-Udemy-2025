// import { useEffect, useState } from "react";
// import type { CourseData } from "../../types/CourseData";
import { useForm } from "../../hooks/useForm";

const TestForm = () => {
  const { formData, handleChange, handleSendForm } = useForm();

  return (
    <div>
      <h1>Formulario con CustomHooks</h1>
      <p>Guardar tu curso favorito</p>
      {/* <p>Curso guardado: {formData.title} </p> */}
      <pre>{formData.title && JSON.stringify(formData)}</pre>

      <form onSubmit={handleSendForm}>
        <input
          type="text"
          name="title"
          id="course-id"
          placeholder="Titulo: "
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          id="course-release-year"
          placeholder="Año publicacion:"
          onChange={handleChange}
        />
        <textarea
          name="description"
          id="description"
          placeholder="Descripcion:"
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="author"
          id="course-author"
          placeholder="Autor: "
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="user-email"
          placeholder="Correo de contacto:"
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default TestForm;
