import React, { Component } from "react";
import Form from "./Form";
export default class ContainerForm extends Component {
  constructor(props){
    super(props);
  }
  render() { 
    return (
      <section
        className="new-height d-flex justify-content-center align-items-center"
        id="containerForms"
      >
        <form className="w-100" onSubmit={this.props.getGame}>
          <div className="row justify-content-center">
            <div className="col-md-5 col-sm-8">
              <Form />
            </div>
          </div>
        </form>
      </section>
    );
  }
}
