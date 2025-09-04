import "./App.css";
import Form from "./components/useRefHook/Form";
import ExampleUseRef from "./components/useRefHook/ExampleUseRef";
import Gestion from "./components/useMemoHook/Gestion";
import Tasks from "./components/useMemoHook/Tasks";
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
    </>
  );
}

export default App;
