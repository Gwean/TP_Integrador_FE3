import React, { Component } from 'react'
import data from './data.json'
import '../index.css'
import Historia from './Historia';
import Opciones from './Opciones';

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
        historia: data,
        contador : 0,
        historial : []
    }

   // this.update=this.update.bind(this); Si es function, debemos usar el bind
  }
componentDidMount(){
    alert("Me acabo de crear");
}
  render() {
      //Estructura basica Layout > 
                                //historia, 
                                //opciones > a y b, 
                                //recordatorio
    return (
      <div className='layout'>
        <Historia 
          historia = {this.state.historia[this.state.contador].historia}
        />
        <Opciones
         opciones = {this.state.historia[this.state.contador].opciones}
        />

      </div>
     
    )
  }
}


