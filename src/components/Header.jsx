import React, { Component } from "react";
import ItemNavBar from "./header-parts/ItemNavBar";
/**
 *  @author Narvaez Ruiz Alexis
 *
 * Componente para renderizar el header de la pagina web.
 *
 */
export default class Header extends Component {
  /**
   * @param var props Propiedades del componente
  */
  constructor(props) {
    super(props);
    this.state = {
        items:[
            {nombre:"Inicio",ruta:'testPages/'},
            {nombre:"Caracteristicas",ruta:'testPages/Caracteristicas'},
            {nombre:"Acerca de",ruta:'testPages/#'}]
    };
  }
  render() {
    return (
      <header className="">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Logo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                {
                    this.state.items.map((item,index)=>(
                        <ItemNavBar key={index} nombre={item.nombre} ruta={item.ruta}/>
                    ))
                }
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
