import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import CurriculumVitae from "../components/CurriculumVitae";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import NotFound from "../components/NotFound";
import Project from "../components/Project";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/curriculum" element={<CurriculumVitae />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/project/:id" element={<Project />}></Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
