import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div  className="input-group mb-3">
        <input type="text"  className="form-control" placeholder="" id="inputGame"/>
        <button  className="btn btn-outline-secondary" type="submit" id="">
          ¡Voy a tener suerte!
        </button>
      </div>
    );
  }
}
