import "../index.css";
import styles from "../styles/Contact.module.css";
const Contact = () => {
  return (
    <div className="page">
      <h1>Contáctame</h1>

      <div className={styles.contactFormContainer}>
        <form>
          <input
            type="text"
            name="clientName"
            id="clientName"
            placeholder="Tu nombre"
          />
          <input
            type="text"
            name="clientLastname"
            id="clientLastname"
            placeholder="Tu apellido"
          />
          <input
            type="email"
            name="clientEmail"
            id="clientEmail"
            placeholder="Tu email"
          />
          <textarea
            name="contactReason"
            id="contactReason"
            placeholder="Motivo de contacto"
          ></textarea>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
