import "../index.css";
import styles from "../styles/Services.module.css";
const Services = () => {
  return (
    <div className="page">
      <h1>Servicios</h1>

      <section className={styles.services}>
        <article className={styles.service}>
          <h2>Diseño web</h2>
          <p>
            Realizo diseños web completamente responsivos e intuitivos para que
            tus clientes puedan visualizar todo de forma correcta en cualquiera
            de sus dispositivos
          </p>
        </article>

        <article className={styles.service}>
          <h2>Desarrollo web</h2>
          <p>
            Desarrollo páginas web utilizando tecnologías modernas como React,
            TypeScript y Node.js, asegurando un rendimiento óptimo y una
            experiencia de usuario fluida.
          </p>
        </article>

        <article className={styles.service}>
          <h2>Posicionamiento web</h2>
          <p>
            Implemento estrategias de SEO para mejorar la visibilidad de tu
            sitio web en los motores de búsqueda, ayudando a atraer más tráfico
            orgánico y potenciales clientes.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Services;
