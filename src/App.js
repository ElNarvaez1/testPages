import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Caracteristicas from "./pages/Caracteristicas";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="d-flex flex-wrap min-vh-100">
        {/*----------------------Seccion del HEADER -------------------*/}
        <section className="container align-items-start">
          <Header />
        </section>
        {/*--------------------Seccion del CUERPO --------------------*/}
        <section className="container">
          {/*---------------Seccion de las RUTAS -----------------*/}
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route
              path="/Caracteristicas"
              element={<Caracteristicas/>}
            />
          </Routes>
        </section>
        {/*-------------------Seccion del FOOTER ---------------------*/}
        <section className="container mt-auto">
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
/*
 <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/
