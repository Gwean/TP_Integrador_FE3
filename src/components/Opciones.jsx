import React, { Component } from 'react';

export default class Opciones extends Component {
  render() {
    return (
      <div className='opciones'> 
          <div className='opcion'>
                <button id='A' className='botones' onClick={this.props.click}>
                    A
                </button>
                <h2>
                    {this.props.opciones.a}
                </h2>
          </div>
          <div className='opcion'>
                <button id='B' className='botones' onClick={this.props.click}>
                    B
                </button>
                <h2 >
                    {this.props.opciones.b}
                </h2>
          </div>
           </div>
    );
  }
}
