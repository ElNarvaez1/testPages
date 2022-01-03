import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Caracteristicas from "./pages/Caracteristicas";
import AcercaDe from "./pages/AcercaDe";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/*----------------------Seccion del HEADER -------------------*/}
        <section className="container">
          <Header />
        </section>
        {/*--------------------Seccion del CUERPO --------------------*/}
        <section className="container">
          {/*---------------Seccion de las RUTAS -----------------*/}
          <Routes>
            <Route exact path="/testPages" element={<Main />} />
            <Route
              path="/testPages/Caracteristicas"
              element={<Caracteristicas/>}
            />
            <Route
              path="/testPages/Acerca-de"
              element={<AcercaDe/>}
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
