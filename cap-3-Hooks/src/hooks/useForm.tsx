import { useState } from "react";
import type { CourseData } from "../types/CourseData";

export const useForm = (
  newData: CourseData = {
    title: "",
    year: 0,
    description: "",
    author: "",
    contactEmail: "",
  }
) => {
  const [formData, setFormData] = useState(newData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "year" ? Number(value) : value,
    }));
  };

  const handleSendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get("title")?.toString() || "";
    const year = Number(formData.get("year")?.toString() || "0");
    const description = formData.get("description")?.toString() || "";
    const author = formData.get("author")?.toString() || "";
    const contactEmail = formData.get("email")?.toString() || "";
    setFormData({
      title,
      year,
      description,
      author,
      contactEmail,
    });
  };

  return {
    formData,
    handleChange,
    handleSendForm,
  };
};
