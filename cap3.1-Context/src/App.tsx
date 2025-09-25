import { useEffect, useState } from "react";
import "./App.css";
import { TestContext } from "./context/TestContext";
import AppRoutes from "./router/AppRoutes";
// import type { Course } from "./types/Course";
import type { User } from "./types/User";

function App() {
  const [user, setUser] = useState<User>({
    username: "",
    name: "",
    website: "",
  });

  useEffect(() => {
    const localUser = localStorage.getItem("credentials");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  useEffect(() => {
    if (user.username != "" && user.username != null) {
      localStorage.setItem("credentials", JSON.stringify(user));
    }
  }, [user]);

  return (
    <div className="App">
      <TestContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <AppRoutes />
      </TestContext.Provider>
    </div>
  );
}

export default App;
