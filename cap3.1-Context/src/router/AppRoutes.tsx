import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Home } from "../components/Home";
import { Articles } from "../components/Articles";
import About from "../components/About";
import { Contact } from "../components/Contact";
import { Login } from "../components/Login";
import { TestContext } from "../context/TestContext";
import { useContext } from "react";

const AppRoutes = () => {
  const sharedContext = useContext(TestContext);
  const { user, setUser } = sharedContext!;
  const credentials = localStorage.getItem("credentials");

  return (
    <BrowserRouter>
      {/* Navigation */}
      <header className="header">
        <nav>
          <div className="logo">
            <h2>Aprendiendo React Context</h2>
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/articles">Articles</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
            <li>
              {user.username ? (
                <NavLink to="/">{`@${user.username}`}</NavLink>
              ) : (
                <NavLink to="/login">Authenticate</NavLink>
              )}
            </li>
            <li>
              {credentials && (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    localStorage.removeItem("credentials");
                    return setUser({ username: null, name: "", website: "" });
                  }}
                >
                  Log Out
                </a>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <section className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 - Not Found!</h1>} />
        </Routes>
      </section>
    </BrowserRouter>
  );
};

export default AppRoutes;
