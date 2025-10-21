import { Route, Routes } from "react-router-dom";
import ExampleUseLayoutEffect from "../components/useLayoutEffect/ExampleUseLayoutEffect";
import App from "../App";
import MyGames from "../components/useReducer/MyGames";
import ExampleUseContext from "../components/useContext/ExampleUseContext";
import UseIdHookExample from "../components/useId/UseIdHookExample";
import CustomHooksExample from "../components/customHooks/CustomHooksExample";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/useEffectHook" element={<ExampleUseLayoutEffect />}></Route>
      <Route path="/useReducerHook" element={<MyGames />}></Route>
      <Route path="/useContextHook" element={<ExampleUseContext />}></Route>
      <Route path="/useIdHook" element={<UseIdHookExample />}></Route>
      <Route path="/customHooks" element={<CustomHooksExample />}></Route>
      <Route path="*" element={<h1>404 Not Found</h1>}></Route>
    </Routes>
  );
};

export default AppRoutes;
