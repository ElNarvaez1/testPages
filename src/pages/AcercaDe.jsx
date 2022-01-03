import React, { Component, useState } from "react";
import Avatar from "./Avatar";
export default function AcercaDe() {
  const [desarrolladores, setInformation] = useState([
    {
      nombre: "Narvaez Ruiz Alexis",
      descripcion: "Ayudame wey, vamos a morir",
      avatar: "michael-tomlinson-xpKH4R50QHc-unsplash.jpg",
    },
    {
      nombre: "Ramirez Oscar Alexis",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"+ 
        "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"+
        "nisi ut aliquip ex ea commodo consequat. ",
      avatar: "michael-tomlinson-xpKH4R50QHc-unsplash.jpg",
    },
  ]);

  return (
    <section>
      <div className="container">
        <h1 className="h4 text-start my-3 ">Desarrolladores.</h1>
        <div className="row justify-content-around">
          {desarrolladores.map((desarrollador, index) => (
            <Avatar
              key={index}
              avatar={desarrollador.avatar}
              nombre={desarrollador.nombre}
              descripcion={desarrollador.descripcion}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <h1 className="h4 text-start mb-3">Cosas.</h1>
        <div className="row">
             <p className="col-md-6 col-sm-12 p-2 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
             </p>   
             <p className="col-md-6 col-sm-12 p-2 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
             </p>   
        </div>
      </div>
    </section>
  );
}
