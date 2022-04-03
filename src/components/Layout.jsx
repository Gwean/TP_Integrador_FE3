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
  }

componentDidMount(){
    alert("Me acabo de crear");
}

handleClick = (clickEvento) => {
    let cont = 0;
    let temp = [];
    const id = clickEvento.target.id;
    if (id === "A"){
      cont ++;
    } else if (id === "B") {
      cont +=2;
    }
    temp =  this.state.historial;
    temp.push(id)
    this.setState({
      contador : this.state.contador + cont,
      historial : temp
    })

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
         click = {this.handleClick}
        />

      </div>
     
    )
  }
}


