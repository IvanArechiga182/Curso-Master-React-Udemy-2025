import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Components from "../pages/Components";
import Ejercicio1 from "../pages/Ejercicio1";
import HookUseEffect from "../pages/HookUseEffect";
import AjaxRequests from "../pages/AjaxRequests";
import FormPractice from "../pages/FormPractice";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/components" element={<Components />}></Route>
      <Route path="/ejercicio1" element={<Ejercicio1 />}></Route>
      <Route path="/ajaxTest" element={<AjaxRequests />}></Route>
      <Route path="/formularios" element={<FormPractice />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
      <Route path="/useEffectHook" element={<HookUseEffect />}></Route>
    </Routes>
  );
}

export default AppRoutes;
