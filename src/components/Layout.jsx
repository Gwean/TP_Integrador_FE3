import React, { Component } from "react";
import data from "./data.json";
import "../index.css";
import Historia from "./Historia";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      historia: data,
      contador: 0,
      historial: [],
      utlimoState: "",
      finalizado: 0,
    };
  }

  componentDidMount() {
    alert("Trabajo Integrador de Mondino Georgina");
    alert("Bienvenido a Elige tu propia aventura.");
  }

  handleClick = (clickEvento) => {
    let cont = 0;
    let temp = [];

    const id = clickEvento.target.id;

    if (
      this.state.historia[this.state.contador].opciones.a === "FIN" ||
      this.state.historia[this.state.contador].opciones.b === "FIN"
    ) {
      alert("Fin, Jugar De Nuevo?");
      this.setState({contador: 0,
        historial: []});
        return;


    } else if (this.state.utlimoState === "A") {
      if (id === "A") {
        cont += 2;
      } else if (id === "B") {
        cont += 3;
      }
    } else if (id === "A") {
      cont++;
    } else if (id === "B") {
      cont += 2;
    }
    temp = this.state.historial;
    temp.push(id);

    this.setState({
      contador: this.state.contador + cont,
      historial: temp,
      utlimoState: id,
    });
  };
  render() {
    //Estructura basica Layout >
    //historia,
    //opciones > a y b,
    //recordatorio
    return (
      <div className="layout">
        <Historia
          historia={this.state.historia[this.state.contador].historia}
        />

        <Opciones
          opciones={this.state.historia[this.state.contador].opciones}
          click={this.handleClick}
        />

        <Recordatorio
          recordatorio={this.state.utlimoState}
          historial={this.state.historial}
        />

      </div>
    );
  }
}
