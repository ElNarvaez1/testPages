import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ItemNavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="nav-item">
        <Link className="nav-link" to={this.props.ruta}>
          {this.props.nombre}
        </Link>
      </li>
    );
  }
}
