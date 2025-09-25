import "./App.css";
import Form from "./components/useRefHook/Form";
import ExampleUseRef from "./components/useRefHook/ExampleUseRef";
import Gestion from "./components/useMemoHook/Gestion";
import Tasks from "./components/useMemoHook/Tasks";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <Form />
      <hr />
      <ExampleUseRef />
      <hr />
      <h2>UseMemo Hook</h2>
      <Gestion />
      <Tasks />
      <hr />
      <Link to="/useEffectHook">UseEffectHook Example</Link>
      <hr />
      <Link to="/useReducerHook">useReducer Hook Example</Link>
      <hr />
      <Link to="/useContextHook">useContext Hook Example</Link>
    </>
  );
}

export default App;
