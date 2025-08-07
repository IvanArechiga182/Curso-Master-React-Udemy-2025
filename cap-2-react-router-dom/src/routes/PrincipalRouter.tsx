import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Contact } from "../components/Contact";
import { Articles } from "../components/Articles";
import { NotFound } from "../components/NotFound";
import { Clients } from "../components/Clients";
import ControlPannel from "../components/ControlPannel";
import Start from "../components/ControlPannel/Start";
import Gestion from "../components/ControlPannel/Gestion";
import About from "../components/ControlPannel/About";
import Create from "../components/ControlPannel/Create";
function PrincipalRouter() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/clients/:clientName" element={<Clients />} />
      <Route path="/clients/" element={<Clients />} />
      <Route path="/panel/*" element={<ControlPannel />}>
        <Route path="inicio" element={<Start />}></Route>
        <Route path="gestion-usuarios" element={<Gestion />}></Route>
        <Route path="acerca-de" element={<About />}></Route>
        <Route path="crear-articulos" element={<Create />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PrincipalRouter;
