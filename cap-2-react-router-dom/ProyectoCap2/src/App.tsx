import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import HeaderNav from "./components/layout/HeaderNav";
import Footer from "./components/layout/Footer";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.layout}>
      <BrowserRouter>
        <HeaderNav />
        <section className={styles.content}>
          <AppRoutes />
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
