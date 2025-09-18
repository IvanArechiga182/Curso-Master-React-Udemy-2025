import { Route, Routes } from "react-router-dom";
import ExampleUseLayoutEffect from "../components/useLayoutEffect/ExampleUseLayoutEffect";
import App from "../App";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/useEffectHook" element={<ExampleUseLayoutEffect />}></Route>
      <Route path="*" element={<h1>404 Not Found</h1>}></Route>
    </Routes>
  );
};

export default AppRoutes;
