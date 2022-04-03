import React, { Component } from "react";

export default class Recordatorio extends Component {

  render() {
      
    return (
      <div className="recordatorio">
        <h3>{"Seleccion anterior: " + this.props.recordatorio }</h3>
        <h4> Historial de opciones elegidas: </h4>
        <ul>
            {this.state.historial.map(eleccion => (<li>{eleccion}<li/>))}
            </ul>
      </div>
    );
  }
}
